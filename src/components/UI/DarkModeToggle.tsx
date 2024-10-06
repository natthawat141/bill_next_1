// path = 'components/UI/DarkModeToggle.tsx'
import { Switch } from '@headlessui/react'

interface DarkModeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

function DarkModeToggle({ isDarkMode, setIsDarkMode }: DarkModeToggleProps) {
  return (
    <Switch
      checked={isDarkMode}
      onChange={setIsDarkMode}
      className={`${
        isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable dark mode</span>
      <span
        className={`${
          isDarkMode ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}

export default DarkModeToggle;