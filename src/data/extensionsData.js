import devLensIcon from '../assets/icons/logo-devlens.svg';
import styleSpyIcon from '../assets/icons/logo-style-spy.svg';
import speedBoostIcon from '../assets/icons/logo-speed-boost.svg';
import jsonWizardIcon from '../assets/icons/logo-json-wizard.svg';
import tabMasterProIcon from '../assets/icons/logo-tab-master-pro.svg';
import viewportBuddyIcon from '../assets/icons/logo-viewport-buddy.svg';
import markupNotesIcon from '../assets/icons/logo-markup-notes.svg';
import gridGuidesIcon from '../assets/icons/logo-grid-guides.svg';
import palettePickerIcon from '../assets/icons/logo-palette-picker.svg';
import linkCheckerIcon from '../assets/icons/logo-link-checker.svg';
import domSnapshotIcon from '../assets/icons/logo-dom-snapshot.svg';
import consolePlusIcon from '../assets/icons/logo-console-plus.svg';

const extensions = [
  {
    id: 1,
    name: 'DevLens',
    description: 'Quickly inspect page layouts and visualize element boundaries.',
    icon: devLensIcon,
  },
  {
    id: 2,
    name: 'StyleSpy',
    description: 'Instantly analyze and copy CSS from any webpage element.',
    icon: styleSpyIcon,
  },
  {
    id: 3,
    name: 'SpeedBoost',
    description: 'Optimizes browser resource usage to accelerate page loading.',
    icon: speedBoostIcon,
  },
  {
    id: 4,
    name: 'JSONWizard',
    description: 'Formats, validates, and prettifies JSON responses in-browser.',
    icon: jsonWizardIcon,
  },
  {
    id: 5,
    name: 'TabMaster Pro',
    description: 'Organizes browser tabs into groups and sessions.',
    icon: tabMasterProIcon,
  },
  {
    id: 6,
    name: 'ViewportBuddy',
    description: 'Simulates various screen resolutions directly within the browser.',
    icon: viewportBuddyIcon,
  },
  {
    id: 7,
    name: 'Markup Notes',
    description: 'Enables annotation and notes directly onto webpages for collaborative debugging.',
    icon: markupNotesIcon,
  },
  {
    id: 8,
    name: 'GridGuides',
    description: 'Overlay customizable grids and alignment guides on any webpage.',
    icon: gridGuidesIcon,
  },
  {
    id: 9,
    name: 'Palette Picker',
    description: 'Instantly extracts color palettes from any webpage.',
    icon: palettePickerIcon,
  },
  {
    id: 10,
    name: 'LinkChecker',
    description: 'Scans and highlights broken links on any page.',
    icon: linkCheckerIcon,
  },
  {
    id: 11,
    name: 'DOM Snapshot',
    description: 'Capture and export DOM structures quickly.',
    icon: domSnapshotIcon,
  },
  {
    id: 12,
    name: 'ConsolePlus',
    description: 'Enhanced developer console with advanced filtering and logging.',
    icon: consolePlusIcon,
  },
];

export default extensions;
