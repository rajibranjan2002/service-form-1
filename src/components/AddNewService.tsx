'use client'
import React, { useState, useEffect } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addNewServiceSchema, AddNewServiceFormData } from '../schemas/addNewServiceSchema';
import * as S from '../components/AddNewServiceStyles'

const AddNewService: React.FC = () => {
  const [isModifying, setIsModifying] = useState(false);
  const { control, handleSubmit, watch, reset, formState: { errors } } = useForm<AddNewServiceFormData>({
    resolver: zodResolver(addNewServiceSchema),
    defaultValues: {
      processingSteps: [{ stepType: '', stepName: '', counterNo: '', serviceDeliveryPerson: '', performingDepartment: '', careTeam: '' }],
      isThirdPartyVendor: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "processingSteps",
  });

  const isThirdPartyVendor = watch("isThirdPartyVendor");

  const onSubmit = (data: AddNewServiceFormData) => {
    console.log(data);
    if (Object.keys(errors).length === 0) {
      setIsModifying(false);
    }
  };

  const handleAdd = () => {
    append({ stepType: '', stepName: '', counterNo: '', serviceDeliveryPerson: '', performingDepartment: '', careTeam: '' });
  };

  const handleRemove = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const handleModifyDetails = () => {
    setIsModifying(true);
    reset({
      processingSteps: [{ stepType: '', stepName: '', counterNo: '', serviceDeliveryPerson: '', performingDepartment: '', careTeam: '' }],
      isThirdPartyVendor: false,
      parentHospital: '',
      branchUnit: '',
      serviceName: '',
      serviceCode: '',
      serviceCategory: '',
      serviceType: '',
      thirdPartyVendor: '',
      servicePerformingDepartment: '',
      primaryServiceProviderName: '',
      basePrice: undefined,
      totalTaxRate: undefined,
      cgst: undefined,
      sgst: undefined,
    });
  };

  useEffect(() => {
    if (isModifying) {
      reset({
        processingSteps: [{ stepType: '', stepName: '', counterNo: '', serviceDeliveryPerson: '', performingDepartment: '', careTeam: '' }],
        isThirdPartyVendor: false,
        parentHospital: '',
        branchUnit: '',
        serviceName: '',
        serviceCode: '',
        serviceCategory: '',
        serviceType: '',
        thirdPartyVendor: '',
        servicePerformingDepartment: '',
        primaryServiceProviderName: '',
        basePrice: undefined,
        totalTaxRate: undefined,
        cgst: undefined,
        sgst: undefined,
      });
    }
  }, [isModifying, reset]);

  return (
    <S.PageContainer>
      <S.Header>
        <S.HeaderContent>
          <S.BackButton>&larr;Add New Service</S.BackButton>
          <S.Breadcrumbs>
            Settings &gt; Service Catalogue &gt; View Service Catalogue
          </S.Breadcrumbs>
        </S.HeaderContent>
        <S.ModifyDetailsButton onClick={handleModifyDetails}>
          Modify Details
        </S.ModifyDetailsButton>
      </S.Header>

      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.FacilitySection>
          <S.SectionTitle>Select the Facility where service will be created</S.SectionTitle>
          <S.FacilityInputGroup>
            <S.InputWrapper>
              <S.Label>Select Parent Hospital</S.Label>
              <Controller
                name="parentHospital"
                control={control}
                render={({ field }) => (
                  <>
                    <S.Input {...field} placeholder="Select Parent Hospital" />
                    {errors.parentHospital && <S.ErrorMessage>{errors.parentHospital.message}</S.ErrorMessage>}
                  </>
                )}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>Select Branch Unit</S.Label>
              <Controller
                name="branchUnit"
                control={control}
                render={({ field }) => (
                  <>
                    <S.Input {...field} placeholder="Enter Service code" />
                    {errors.branchUnit && <S.ErrorMessage>{errors.branchUnit.message}</S.ErrorMessage>}
                  </>
                )}
              />
            </S.InputWrapper>
          </S.FacilityInputGroup>
        </S.FacilitySection>

        <S.BasicDetailsSection>
          <S.SectionTitle>Basic Details of Service</S.SectionTitle>
          <S.BasicDetailsTopRow>
            <S.LargeInputWrapper>
              <S.Label>Service Name *</S.Label>
              <Controller
                name="serviceName"
                control={control}
                render={({ field }) => (
                  <>
                    <S.Input {...field} placeholder="Enter Service Name" />
                    {errors.serviceName && <S.ErrorMessage>{errors.serviceName.message}</S.ErrorMessage>}
                  </>
                )}
              />
            </S.LargeInputWrapper>
            <S.SmallInputWrapper>
              <S.Label>Service Code</S.Label>
              <Controller
                name="serviceCode"
                control={control}
                render={({ field }) => (
                  <>
                    <S.Input {...field} placeholder="Enter Service Code" />
                    {errors.serviceCode && <S.ErrorMessage>{errors.serviceCode.message}</S.ErrorMessage>}
                  </>
                )}
              />
            </S.SmallInputWrapper>
          </S.BasicDetailsTopRow>
          <S.BasicDetailsBottomRow>
            <S.InputWrapper>
              <S.Label>Service Category *</S.Label>
              <Controller
                name="serviceCategory"
                control={control}
                render={({ field }) => (
                  <>
                    <S.Input {...field} placeholder="Select Service Catagory " />
                    {errors.serviceCategory && <S.ErrorMessage>{errors.serviceCategory.message}</S.ErrorMessage>}
                  </>
                )}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>Service Type *</S.Label>
              <Controller
                name="serviceType"
                control={control}
                render={({ field }) => (
                  <>
                    <S.Input {...field} placeholder="Select Service type" />
                    {errors.serviceType && <S.ErrorMessage>{errors.serviceType.message}</S.ErrorMessage>}
                  </>
                )}
              />
            </S.InputWrapper>
            <S.CheckboxWrapper>
              <Controller
                name="isThirdPartyVendor"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                  <S.Checkbox
                    type="checkbox"
                    onChange={(e) => onChange(e.target.checked)}
                    checked={value}
                    {...field}
                  />
                )}
              />
              <S.CheckboxLabel>Service Executed By 3rd Party Vendor</S.CheckboxLabel>
            </S.CheckboxWrapper>
            {isThirdPartyVendor && (
              <S.InputWrapper>
                <S.Label>Select 3rd Party Vendor *</S.Label>
                <Controller
                  name="thirdPartyVendor"
                  control={control}
                  render={({ field }) => (
                    <>
                      <S.Select {...field}>
                        <option value="">Select 3rd Party Service Provider Name</option>
                        <option value="Vendor A">Vendor A</option>
                        <option value="Vendor B">Vendor B</option>
                        <option value="Vendor C">Vendor C</option>
                        <option value="Vendor D">Vendor D</option>
                      </S.Select>
                      {errors.thirdPartyVendor && <S.ErrorMessage>{errors.thirdPartyVendor.message}</S.ErrorMessage>}
                    </>
                  )}
                />
              </S.InputWrapper>
            )}
          </S.BasicDetailsBottomRow>
        </S.BasicDetailsSection>
        <S.ProviderDetailsSection>
          <S.SectionTitle>Service Provider Details</S.SectionTitle>
          <S.ProviderInputGroup>
            <S.InputWrapper>
              <S.Label>Service Performing Department *</S.Label>
              <Controller
                name="servicePerformingDepartment"
                control={control}
                render={({ field }) => (
                  <>
                    <S.Select {...field}>
                      <option value="">Select Service Category</option>
                      <option value="Department A">Department A</option>
                      <option value="Department B">Department B</option>
                      <option value="Department C">Department C</option>
                      <option value="Department D">Department D</option>
                    </S.Select>
                    {errors.servicePerformingDepartment && <S.ErrorMessage>{errors.servicePerformingDepartment.message}</S.ErrorMessage>}
                  </>
                )}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>Primary Service Provider Name</S.Label>
              <Controller
                name="primaryServiceProviderName"
                control={control}
                render={({ field }) => (
                  <>
                    <S.Select {...field}>
                      <option value="">Select Primary Service Provider Name</option>
                      <option value="Provider A">Provider A</option>
                      <option value="Provider B">Provider B</option>
                      <option value="Provider C">Provider C</option>
                      <option value="Provider D">Provider D</option>
                    </S.Select>
                    {errors.primaryServiceProviderName && <S.ErrorMessage>{errors.primaryServiceProviderName.message}</S.ErrorMessage>}
                  </>
                )}
              />
            </S.InputWrapper>
          </S.ProviderInputGroup>
        </S.ProviderDetailsSection>

        <S.PricingSection>
          <S.SectionTitle>Service Pricing Details</S.SectionTitle>
          <S.PricingInputGroup>
            <S.InputWrapper>
              <S.Label>Base Price of the Service</S.Label>
              <Controller
                name="basePrice"
                control={control}
                render={({ field }) => (
                  <>
                    <S.Input {...field} placeholder="Enter Base Price of the Service" />
                    {errors.basePrice && <S.ErrorMessage>{errors.basePrice.message}</S.ErrorMessage>}
                  </>
                )}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>Total Tax Rate</S.Label>
              <Controller
                name="totalTaxRate"
                control={control}
                render={({ field }) => (
                  <>
                    <S.Input {...field} placeholder="Enter Total Tax Rate" />
                    {errors.totalTaxRate && <S.ErrorMessage>{errors.totalTaxRate.message}</S.ErrorMessage>}
                  </>
                )}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>CGST</S.Label>
              <Controller
                name="cgst"
                control={control}
                render={({ field }) => (
                  <>
                    <S.Input {...field}  placeholder="Enter CGST Tax Rate" />
                    {errors.cgst && <S.ErrorMessage>{errors.cgst.message}</S.ErrorMessage>}
                  </>
                )}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>SGST</S.Label>
              <Controller
                name="sgst"
                control={control}
                render={({ field }) => (
                  <>
                    <S.Input {...field}  placeholder="Enter SGST Tax Rate" />
                    {errors.sgst && <S.ErrorMessage>{errors.sgst.message}</S.ErrorMessage>}
                  </>
                )}
              />
            </S.InputWrapper>
          </S.PricingInputGroup>
        </S.PricingSection>

        <S.ProcessingStepsSection>
          <S.SectionTitle>Service Processing Step Details</S.SectionTitle>
          {fields.map((field, index) => (
            <React.Fragment key={field.id}>
              <S.StepInputGroup>
                <S.StepInputWrapper>
                  <S.Label>Service Step Type</S.Label>
                  <Controller
                    name={`processingSteps.${index}.stepType`}
                    control={control}
                    render={({ field }) => (
                      <>
                        <S.Select {...field}>
                          <option value="">Step Type</option>
                          <option value="Type A">Type A</option>
                          <option value="Type B">Type B</option>
                          <option value="Type C">Type C</option>
                        </S.Select>
                        {errors.processingSteps?.[index]?.stepType && <S.ErrorMessage>{errors.processingSteps[index].stepType.message}</S.ErrorMessage>}
                      </>
                    )}
                  />
                </S.StepInputWrapper>
                <S.StepInputWrapper>
                  <S.Label>Step Name</S.Label>
                  <Controller
                    name={`processingSteps.${index}.stepName`}
                    control={control}
                    render={({ field }) => (
                      <>
                        <S.Input {...field} placeholder="Type of Step" />
                        {errors.processingSteps?.[index]?.stepName && <S.ErrorMessage>{errors.processingSteps[index].stepName.message}</S.ErrorMessage>}
                      </>
                    )}
                  />
                </S.StepInputWrapper>
                <S.StepInputWrapper>
                  <S.Label>Counter No</S.Label>
                  <Controller
                    name={`processingSteps.${index}.counterNo`}
                    control={control}
                    render={({ field }) => (
                      <S.Input {...field} placeholder="Counter No" />
                    )}
                  />
                </S.StepInputWrapper>
                <S.StepInputWrapper>
                  <S.Label>Service Delivery Person</S.Label>
                  <Controller
                    name={`processingSteps.${index}.serviceDeliveryPerson`}
                    control={control}
                    render={({ field }) => (
                      <S.Input {...field} placeholder="Select Person" />
                    )}
                  />
                </S.StepInputWrapper>
                <S.StepInputWrapper>
                  <S.Label>Performing Department</S.Label>
                  <Controller
                    name={`processingSteps.${index}.performingDepartment`}
                    control={control}
                    render={({ field }) => (
                      <S.Input {...field} placeholder="Select Department" />
                    )}
                  />
                </S.StepInputWrapper>
                <S.StepInputWrapper>
                  <S.Label>Care Team (Optional)</S.Label>
                  <Controller
                    name={`processingSteps.${index}.careTeam`}
                    control={control}
                    render={({ field }) => (
                      <S.Input {...field} placeholder="Select Care Team" />
                    )}
                  />
                </S.StepInputWrapper>
                <S.AddButton type="button" onClick={handleAdd}>
                  + Add
                </S.AddButton>
              </S.StepInputGroup>
              {index > 0 && (
                <S.RemoveButtonWrapper>
                  <S.RemoveButton type="button" onClick={() => handleRemove(index)}>
                    - Remove
                  </S.RemoveButton>
                </S.RemoveButtonWrapper>
              )}
            </React.Fragment>
          ))}
        </S.ProcessingStepsSection>

        <S.SaveButtonWrapper>
          <S.SaveButton type="submit">Save Details</S.SaveButton>
        </S.SaveButtonWrapper>
      </S.FormContainer>
    </S.PageContainer>
  );
};

export default AddNewService;