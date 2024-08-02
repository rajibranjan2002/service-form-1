import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 0;
  text-align: left;
`;

export const Breadcrumbs = styled.div`
  font-size: 14px;
  color: #6c757d;
  margin-top: 5px;
`;

export const ModifyDetailsButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: #000000;
`;

export const FacilitySection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const FacilityInputGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const BasicDetailsSection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const BasicDetailsTopRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

export const BasicDetailsBottomRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProviderDetailsSection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ProviderInputGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const PricingSection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const PricingInputGroup = styled.div`
  display: flex;
  gap: 20px;
`;


export const InputWrapper = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
`;

export const LargeInputWrapper = styled(InputWrapper)`
  flex: 2;
`;

export const SmallInputWrapper = styled(InputWrapper)`
  flex: 1;
`;


export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #333;
`;




export const CareTeamAndAddButtonRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  width: 100%;
`;


export const ProcessingStepsSection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const StepInputGroup = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  margin-bottom: 10px;
`;

export const StepInputWrapper = styled.div`
  flex: 1;
  min-width: 120px;
  max-width: 180px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 15px;
  color:  #00000;
`;

export const Input = styled.input`
  padding: 6px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 12px;
`;

export const Select = styled.select`
  padding: 6px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 12px;
`;

export const AddButton = styled.button`
  background-color: white;
  border: 0.5px solid;
  color: black;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
  align-self: flex-end;
  margin-left: 10px;
`;

export const RemoveButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const RemoveButton = styled.button`
  background-color: #dc3545;
  border: none;
  color: white;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
`;
export const SaveButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
`;
export const SaveButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;