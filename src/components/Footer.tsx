import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-gray-700 py-6 flex flex-col items-center justify-center border-t border-gray-200">
      <p className="flex items-center space-x-2 text-sm">
        <span>Created by</span>
        <a
          href="https://github.com/jaydlssnts"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Icon icon="material-symbols-light:code-rounded" width="20" height="20" />
          <span className="mx-1 font-medium">jaydlssnts</span>
          <Icon icon="material-symbols-light:code-off-rounded" width="20" height="20" />
        </a>
      </p>
      <p className="text-xs text-gray-500 mt-2">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
}
