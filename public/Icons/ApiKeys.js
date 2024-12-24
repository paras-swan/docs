export default function ApiKeys({ fill = 'var(--grey-900)', size = 16 }) {
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
        d='M0.666748 8C0.666748 5.79086 2.45761 4 4.66675 4C5.95537 4 7.10177 4.6099 7.83251 5.55474C7.89758 5.63887 7.97194 5.66667 8.02105 5.66667H13.3508C13.7008 5.66667 14.0322 5.82373 14.2538 6.09456L15.2083 7.26122C15.5599 7.69098 15.5599 8.30902 15.2083 8.73878L14.2538 9.90544C14.0322 10.1763 13.7008 10.3333 13.3508 10.3333H12.1913C11.9726 10.3333 11.7584 10.2719 11.5729 10.156L10.7551 9.64483C10.701 9.61105 10.6325 9.61105 10.5784 9.64483L9.76055 10.156C9.57513 10.2719 9.36087 10.3333 9.14222 10.3333H8.02105C7.97194 10.3333 7.89758 10.3611 7.83251 10.4453C7.10177 11.3901 5.95537 12 4.66675 12C2.45761 12 0.666748 10.2091 0.666748 8ZM3.66675 8C3.66675 7.44772 4.11446 7 4.66675 7C5.21903 7 5.66675 7.44772 5.66675 8C5.66675 8.55229 5.21903 9 4.66675 9C4.11446 9 3.66675 8.55229 3.66675 8Z'
        fill={fill}
      />
    </svg>
  );
}