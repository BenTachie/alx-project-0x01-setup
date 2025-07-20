import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // Deep update for nested fields
    if (name.includes(".")) {
      const keys = name.split(".");
      setUser(prev => ({
        ...prev,
        [keys[0]]: {
          ...prev[keys[0] as keyof typeof prev],
          [keys[1]]: value
        }
      }));
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-md p-6 w-full max-w-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-2 gap-2">
            <input type="text" name="name" placeholder="Name" onChange={handleChange} className="input" />
            <input type="text" name="username" placeholder="Username" onChange={handleChange} className="input" />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} className="input" />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} className="input" />
            <input type="text" name="website" placeholder="Website" onChange={handleChange} className="input" />
            <input type="text" name="address.street" placeholder="Street" onChange={handleChange} className="input" />
            <input type="text" name="address.suite" placeholder="Suite" onChange={handleChange} className="input" />
            <input type="text" name="address.city" placeholder="City" onChange={handleChange} className="input" />
            <input type="text" name="address.zipcode" placeholder="Zipcode" onChange={handleChange} className="input" />
            <input type="text" name="address.geo.lat" placeholder="Latitude" onChange={handleChange} className="input" />
            <input type="text" name="address.geo.lng" placeholder="Longitude" onChange={handleChange} className="input" />
            <input type="text" name="company.name" placeholder="Company Name" onChange={handleChange} className="input" />
            <input type="text" name="company.catchPhrase" placeholder="Catchphrase" onChange={handleChange} className="input" />
            <input type="text" name="company.bs" placeholder="Business Statement" onChange={handleChange} className="input" />
          </div>

          <div className="flex justify-end space-x-3 mt-2">
            <button type="button" onClick={onClose} className="text-gray-600">Cancel</button>
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
