
export default function Payment({ fill = 'var(--grey-900)', size = 16 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size}
        height={size} fill={fill} viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm2 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6H4Zm16-2H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2Zm-6 6a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z" clipRule="evenodd"></path></svg>
    );
  }
  