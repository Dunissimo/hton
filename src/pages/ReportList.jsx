import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReportItem } from '../components/ReportItem';

export const ReportList = () => {
    const { reports } = useSelector((state) => state.reports);

    console.log(reports);

    return (
        <div className="my-container">
            <div className="reports-list">
                {reports.map((item, index) => (
                    <Link key={index} to={`/reports/${item.id}`}>
                        <ReportItem {...item} />
                    </Link>
                ))}
            </div>
        </div>
    )
}