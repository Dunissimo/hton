import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReportItem } from '../../components/Report/ReportItem';
import { useEffect } from 'react';
import { fetchReportsReq } from '../../store/slices/reports';

export const ReportList = () => {
    const { reports } = useSelector((state) => state.reports);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReportsReq());
    }, []);
    
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
    );
}