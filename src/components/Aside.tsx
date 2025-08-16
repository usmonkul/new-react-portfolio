import data from '../data/data';
import Icon from './Icon';

export function AsideLeft(): React.JSX.Element {
    return (
        <aside className="fixed left-10 bottom-0 z-50 hidden md:block">
            <ul className="socials flex flex-col justify-center items-center space-y-6">
                { data.socialMedia &&
                    data.socialMedia.map(({ url, name }, i: number) => (
                    <li key={i}>
                        <a 
                            title={name}
                            href={url} 
                            aria-label={name} 
                            target="_blank" 
                            rel="noreferrer"
                            className="transition-all duration-200"
                            style={{
                                color: 'var(--text-secondary)',
                                backgroundColor: 'var(--bg-tertiary)'
                            }}
                            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                e.currentTarget.style.color = 'var(--accent-primary)';
                                e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                            }}
                            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                e.currentTarget.style.color = 'var(--text-secondary)';
                                e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
                            }}
                        >
                            <Icon name={name} /> 
                        </a>
                    </li>
                    ))
                }
            </ul>
        </aside>
    )
}

export function AsideRight(): React.JSX.Element {
    return (
        <aside className="email__aside fixed right-10 bottom-0 z-50 hidden md:block">
            <a href={`mailto:${data.email}`} className="text-sm text-gray-500 hover:translate-y-[-3px] transition-all duration-200"
                style={{
                    color: 'var(--text-secondary)',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                }}
            >
                {data.email}
            </a>
        </aside>
    )
}