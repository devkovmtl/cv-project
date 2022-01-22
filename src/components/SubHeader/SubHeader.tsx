type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return <h2 className='text-2xl font-semibold text-left py-3'>{title}</h2>;
}

export default Header;
