import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import type { Medicine } from '../../types';

const medicineSchema = z.object({
  name: z.string().min(2, 'Medicine name must be at least 2 characters'),
  dosage: z.string().min(1, 'Dosage is required'),
  scheduleTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
});

type MedicineFormData = z.infer<typeof medicineSchema>;

interface MedicineFormProps {
  medicine?: Medicine;
  onSubmit: (data: MedicineFormData) => Promise<void>;
  onCancel: () => void;
}

export function MedicineForm({ medicine, onSubmit, onCancel }: MedicineFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<MedicineFormData>({
    resolver: zodResolver(medicineSchema),
    defaultValues: medicine,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Medicine Name"
        {...register('name')}
        error={errors.name?.message}
      />
      <Input
        label="Dosage"
        {...register('dosage')}
        placeholder="e.g., 1 tablet"
        error={errors.dosage?.message}
      />
      <Input
        label="Schedule Time"
        type="time"
        {...register('scheduleTime')}
        error={errors.scheduleTime?.message}
      />
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" isLoading={isSubmitting}>
          {medicine ? 'Update' : 'Add'} Medicine
        </Button>
      </div>
    </form>
  );
}