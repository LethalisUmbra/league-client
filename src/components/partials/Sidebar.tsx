import {
  FaUserPlus,
  FaList,
  FaSearch,
  FaCaretRight,
  FaFolderPlus,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div
      className="flex flex-col h-full bg-gray-900 text-amber-100 text-xs"
      style={{ width: "270px" }}
    >
      <div className="flex p-1.5 justify-between items-center">
        <span>SOCIAL</span>
        <div id="sidebar-icons" className="flex gap-4 text-amber-200 text-sm">
          <button className="hover:text-amber-100 transition-colors">
            <FaUserPlus />
          </button>
          <button className="hover:text-amber-100 transition-colors">
            <FaFolderPlus title="Agregar carpeta" />
          </button>
          <button className="hover:text-amber-100 transition-colors">
            <FaList title="Opciones" />
          </button>
          <button className="hover:text-amber-100 transition-colors">
            <FaSearch title="Filtro" />
          </button>
        </div>
      </div>
      <button className="p-1 flex gap-2.5 items-center hover:bg-gray-700">
        <FaCaretRight />
        <span>GENERAL (0/0)</span>
      </button>
    </div>
  );
}
