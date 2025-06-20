import { useState } from "react";
import axios from "axios";
import './LeaseRentForm.css';

export default function LeaseRentForm({ setGeneratedRentLease }) {
  const [formData, setFormData] = useState({
    landlord_name: "",
    tenant_name: "",
    tenant_contact: "",
    tenant_email: "",
    rent_amount: "",
    security_deposit: "",
    duration: "",
    start_date: "",
    address: "",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "",
    furnished_status: "Fully Furnished",
    bedrooms: 1,
    property_type: "Apartment",
    utilities: [],
    notice_period: 1,
    maintenance_charges: 0,
    agreement_type: "Leave & License",
    additional_terms: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        utilities: checked
          ? [...prev.utilities, value]
          : prev.utilities.filter((u) => u !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://lease-agreement-backend.onrender.com/api/generate", formData);
    setGeneratedRentLease(res.data.rentleaseText);
  };

  return (
    <form className="lease-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Rental Lease Generator</h2>

      <input name="landlord_name" 
      placeholder="Landlord Full Name" onChange={handleChange} />
      <input name="tenant_name" 
      placeholder="Tenant Full Name" onChange={handleChange} />
      <input name="tenant_contact" 
      placeholder="Tenant Contact" onChange={handleChange} />
      <input name="tenant_email" type="email" 
      placeholder="Tenant Email" onChange={handleChange} />
      <input name="rent_amount" type="number" 
      placeholder="Rent (INR)" onChange={handleChange} />
      <input name="security_deposit" type="number" 
      placeholder="Security Deposit (INR)" onChange={handleChange} />
      <input name="duration" type="number" 
      placeholder="Rental Duration (months)" onChange={handleChange} />
      <input name="start_date" type="date" 
      placeholder="Start Date" onChange={handleChange} />
      <textarea name="address" 
      placeholder="Property Address" onChange={handleChange} />

      <button type="submit">Generate Lease</button>
    </form>
  );
}
