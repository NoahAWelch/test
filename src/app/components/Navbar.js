const navbarList = [
    {
        title: 'home',
        href: '/',
    },

    {
        title: 'about',
        href: '/about',
    },

    {
        title: 'contact',
        href: '/contact',
    },

    {
        title: 'services',
        href: '/services',
    },

    {
        title: 'products',
        href: '/products',
    },
]

export default () => {
    return (
    <div className="flex justify-end gap-2 m-3">
      
      {navbarList.map((listItem) => (
        <a href={listItem.href} className=" px-4 py-2 bg-gray-300 shadow-md rounded-md">
            {listItem.title}
            </a>
       ))}
       </div>
       )
}