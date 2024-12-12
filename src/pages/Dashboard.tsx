import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MedicineForm } from '../components/medicines/MedicineForm';
import { MedicineList } from '../components/medicines/MedicineList';
import { medicines, acknowledgments } from '../utils/api';
import type { Medicine } from '../types';

export default function Dashboard() {
  const [medicineList, setMedicineList] = useState<Medicine[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingMedicine, setEditingMedicine] = useState<Medicine | undefined>();

  useEffect(() => {
    loadMedicines();
  }, []);

  const loadMedicines = async () => {
    try {
      const data = await medicines.getAll();
      setMedicineList(data);
    } catch (error) {
      console.error('Failed to load medicines:', error);
    }
  };

  const handleSubmit = async (data: Omit<Medicine, 'id' | 'userId'>) => {
    try {
      if (editingMedicine) {
        await medicines.update(editingMedicine.id, data);
      } else {
        await medicines.create(data);
      }
      await loadMedicines();
      setIsFormOpen(false);
      setEditingMedicine(undefined);
    } catch (error) {
      console.error('Failed to save medicine:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await medicines.delete(id);
      await loadMedicines();
    } catch (error) {
      console.error('Failed to delete medicine:', error);
    }
  };

  const handleAcknowledge = async (medicineId: string, status: 'taken' | 'missed') => {
    try {
      await acknowledgments.create(medicineId, status);
      // Optionally refresh the list or show a success message
    } catch (error) {
      console.error('Failed to acknowledge medicine:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Medications</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your medication schedule and track your doses
          </p>
        </div>
        <Button
          onClick={() => setIsFormOpen(true)}
          className="mt-4 sm:mt-0 inline-flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Medicine
        </Button>
      </div>

      {isFormOpen && (
        <div className="bg-white shadow sm:rounded-lg p-4">
          <MedicineForm
            medicine={editingMedicine}
            onSubmit={handleSubmit}
            onCancel={() => {
              setIsFormOpen(false);
              setEditingMedicine(undefined);
            }}
          />
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <MedicineList
          medicines={medicineList}
          onEdit={(medicine) => {
            setEditingMedicine(medicine);
            setIsFormOpen(true);
          }}
          onDelete={handleDelete}
          onAcknowledge={handleAcknowledge}
        />
      </div>
    </div>
  );
}