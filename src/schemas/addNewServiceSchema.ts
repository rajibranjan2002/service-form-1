import { z } from 'zod';

export const addNewServiceSchema = z.object({
  parentHospital: z.string()
    .min(3, "Parent Hospital must be at least 3 characters long")
    .max(100, "Parent Hospital cannot exceed 100 characters")
    .regex(/^[A-Za-z\s]+$/, "Parent Hospital must contain only alphabetic characters and spaces"),
  
  branchUnit: z.string()
    .min(3, "Branch Unit must be at least 3 characters long")
    .max(100, "Branch Unit cannot exceed 100 characters")
    .regex(/^[A-Za-z\s]+$/, "Branch Unit must contain only alphabetic characters and spaces"),
  
  serviceName: z.string()
    .min(3, "Service Name must be at least 3 characters long")
    .max(100, "Service Name cannot exceed 100 characters")
    .regex(/^[A-Za-z\s]+$/, "Service Name must contain only alphabetic characters and spaces"),
  
  serviceCode: z.string()
    .min(5, "Service Code must be at least 5 characters long")
    .max(10, "Service Code cannot exceed 10 characters")
    .regex(/^[A-Z0-9]+$/, "Service Code must be alphanumeric and uppercase"),
  
  serviceCategory: z.string()
    .min(3, "Service Category must be at least 3 characters long")
    .max(50, "Service Category cannot exceed 50 characters"),
  
  serviceType: z.string()
    .min(3, "Service Type must be at least 3 characters long")
    .max(50, "Service Type cannot exceed 50 characters"),
  
  isThirdPartyVendor: z.boolean(),
  
  thirdPartyVendor: z.string()
    .max(100, "Third Party Vendor cannot exceed 100 characters")
    .optional(),
  
  servicePerformingDepartment: z.string()
    .min(3, "Service Performing Department must be at least 3 characters long")
    .max(100, "Service Performing Department cannot exceed 100 characters"),
  
  primaryServiceProviderName: z.string()
    .min(3, "Primary Service Provider Name must be at least 3 characters long")
    .max(100, "Primary Service Provider Name cannot exceed 100 characters")
    .regex(/^[A-Za-z\s]+$/, "Primary Service Provider Name must contain only alphabetic characters and spaces"),
  
  basePrice: z.number()
    .min(0.01, "Base Price must be a positive number")
    .max(1000000, "Base Price cannot exceed 1,000,000"),
  
  totalTaxRate: z.number()
    .min(0, "Total Tax Rate must be a positive number")
    .max(100, "Total Tax Rate cannot exceed 100%"),
  
  cgst: z.number()
    .min(0, "CGST must be a positive number")
    .max(100, "CGST cannot exceed 100%"),
  
  sgst: z.number()
    .min(0, "SGST must be a positive number")
    .max(100, "SGST cannot exceed 100%"),
  
  processingSteps: z.array(z.object({
    stepType: z.string()
      .min(3, "Step Type must be at least 3 characters long")
      .max(50, "Step Type cannot exceed 50 characters"),
    
    stepName: z.string()
      .min(3, "Step Name must be at least 3 characters long")
      .max(100, "Step Name cannot exceed 100 characters"),
    
    counterNo: z.string()
      .regex(/^\d*$/, "Counter No must be numeric")
      .optional(),
    
    serviceDeliveryPerson: z.string()
      .max(100, "Service Delivery Person cannot exceed 100 characters")
      .optional(),
    
    performingDepartment: z.string()
      .max(100, "Performing Department cannot exceed 100 characters")
      .optional(),
    
    careTeam: z.string()
      .max(100, "Care Team cannot exceed 100 characters")
      .optional(),
  })).min(1, "At least one processing step is required"),
}).superRefine((data, ctx) => {
  if (data.isThirdPartyVendor && !data.thirdPartyVendor) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Third Party Vendor is required when Is Third Party Vendor is true",
      path: ["thirdPartyVendor"],
    });
  }
  
  if (data.cgst + data.sgst > 100) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Combined CGST and SGST cannot exceed 100%",
      path: ["cgst"],
    });
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Combined CGST and SGST cannot exceed 100%",
      path: ["sgst"],
    });
  }
});

export type AddNewServiceFormData = z.infer<typeof addNewServiceSchema>;
