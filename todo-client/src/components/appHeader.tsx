import { FC } from 'react';

const AppHeader: FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold font-sans text-3xl tracking-tight">Todo App</span>
      </div>
    </nav>
  );
};

export default AppHeader;
