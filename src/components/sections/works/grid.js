import Preview from './preview';

export default function WorksGrid({list})
{
    return (
        <div className="works-grid">
            {
                Object.keys(list).map(function(key) {
                    return <Preview key={key} url={list[key].permalink} src={list[key].thumb.url} alt={list[key].thumb.alt} />
                })
            }
        </div>
    )
}