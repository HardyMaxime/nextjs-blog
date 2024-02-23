export default function ProjectDetail({children, title})
{
    return(
        <li className="projets-detail" >
            <h2 className="projets-detail-title">{title}</h2>
            <p className="projets-detail-content">
                {children}
            </p>
        </li>
    );
}