export default function Models({ fill = 'var(--grey-900)', size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.62528 2.06908C6.93172 1.60942 7.44761 1.33333 8.00004 1.33333C8.55248 1.33333 9.06836 1.60942 9.3748 2.06908L9.63287 2.45619C9.89855 2.85471 10.3832 3.04715 10.8499 2.93945L11.1045 2.88071C11.6689 2.75045 12.2606 2.92016 12.6703 3.32978C13.0799 3.73939 13.2496 4.33113 13.1193 4.89558L13.0606 5.15015C12.9529 5.61685 13.1453 6.10148 13.5438 6.36716L13.931 6.62524C14.3906 6.93167 14.6667 7.44756 14.6667 8C14.6667 8.55243 14.3906 9.06832 13.931 9.37475L13.5438 9.63283C13.1453 9.89851 12.9529 10.3831 13.0606 10.8498L13.1193 11.1044C13.2496 11.6689 13.0799 12.2606 12.6703 12.6702C12.2606 13.0798 11.6689 13.2495 11.1045 13.1193L10.8499 13.0605C10.3832 12.9528 9.89855 13.1453 9.63287 13.5438L9.3748 13.9309C9.06836 14.3906 8.55248 14.6667 8.00004 14.6667C7.44761 14.6667 6.93172 14.3906 6.62528 13.9309L6.36721 13.5438C6.10153 13.1453 5.61689 12.9528 5.15019 13.0605L4.89563 13.1193C4.33118 13.2495 3.73944 13.0798 3.32982 12.6702C2.9202 12.2606 2.7505 11.6689 2.88075 11.1044L2.9395 10.8498C3.0472 10.3831 2.85475 9.89851 2.45623 9.63283L2.06912 9.37475C1.60947 9.06832 1.33337 8.55243 1.33337 8C1.33337 7.44756 1.60947 6.93167 2.06912 6.62524L2.45623 6.36716C2.85476 6.10148 3.0472 5.61685 2.9395 5.15015L2.88075 4.89558C2.7505 4.33113 2.9202 3.73939 3.32982 3.32977C3.73944 2.92016 4.33118 2.75045 4.89563 2.88071L5.15019 2.93945C5.61689 3.04715 6.10153 2.85471 6.36721 2.45619L6.62528 2.06908ZM5.91671 8C5.91671 6.8494 6.84945 5.91666 8.00004 5.91666C9.15063 5.91666 10.0834 6.8494 10.0834 8C10.0834 9.15059 9.15063 10.0833 8.00004 10.0833C6.84945 10.0833 5.91671 9.15059 5.91671 8Z'
        fill={fill}
      />
    </svg>
  );
}
