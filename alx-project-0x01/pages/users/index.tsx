import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import { useState } from "react";

interface UserPageProps {
  users: UserData[];
}

const Users: React.FC<UserPageProps> = ({ users }) => {
  const [userList, setUserList] = useState<UserData[]>(users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    const newId = userList.length + 1;
    setUserList([...userList, { ...newUser, id: newId }]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Users</h1>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {userList.map((user: UserData, key) => (
            <UserCard user={user} key={key} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
