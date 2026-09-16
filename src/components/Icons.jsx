export function ArrowRightIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeftIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 12H5m6 6-6-6 6-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ImageIcon({ size = 32 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle
        cx="8.5"
        cy="9"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="m5 18 4.5-4.5 3 3 2-2L19 18"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
