import { z } from 'zod';

export const incomeSchema = z.object({
	gross_annual_income: z.number().positive().default(100)
});
