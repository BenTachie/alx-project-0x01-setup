import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-1">📧 {email}</p>
      <p className="text-sm text-gray-600 mb-1">📱 {phone}</p>
      <p className="text-sm text-gray-600 mb-1">🌐 {website}</p>

      <div className="mt-4">
        <h4 className="text-sm font-bold text-gray-700">🏢 Company</h4>
        <p className="text-sm text-gray-600">{company.name}</p>
        <p className="text-xs text-gray-500 italic">"{company.catchPhrase}"</p>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-bold text-gray-700">📍 Address</h4>
        <p className="text-sm text-gray-600">
          {address.suite}, {address.street}, {address.city}, {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
