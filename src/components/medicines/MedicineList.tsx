import React from 'react';
import { format } from 'date-fns';
import { Edit2, Trash2, Check, X } from 'lucide-react';
import { Button } from '../ui/Button';
import type { Medicine } from '../../types';

interface MedicineListProps {
  medicines: Medicine[];
  onEdit: (medicine: Medicine) => void;
  onDelete: (id: string) => void;
  onAcknowledge: (id: string, status: 'taken' | 'missed') => void;
}

export function MedicineList({ medicines, onEdit, onDelete, onAcknowledge }: MedicineListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Medicine
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Dosage
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Schedule
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {medicines.map((medicine) => (
            <tr key={medicine.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{medicine.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{medicine.dosage}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  {format(new Date(`2000-01-01T${medicine.scheduleTime}`), 'h:mm a')}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                <Button
                  variant="outline"
                  onClick={() => onAcknowledge(medicine.id, 'taken')}
                  className="inline-flex items-center"
                >
                  <Check className="h-4 w-4 mr-1" />
                  Taken
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onAcknowledge(medicine.id, 'missed')}
                  className="inline-flex items-center"
                >
                  <X className="h-4 w-4 mr-1" />
                  Missed
                </Button>
                <button
                  onClick={() => onEdit(medicine)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onDelete(medicine.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}