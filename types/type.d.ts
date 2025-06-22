type IconProps = {
  width?: number;
  height?: number;
  className?: string;
};

type NavLink = {
  id: string;
  name: string;
  href: string;
};

type PageProps = {
  params: {
    locale: string;
  };
}