import { Header } from './components/Header';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ProjectList } from './pages/ProjectList';
import { ReportList } from './pages/ReportList';
import { Project } from './pages/Project';
import { Report } from './pages/Report';
import { CreateReport } from './pages/CreateReport';
import { useEffect } from 'react';
import { Test } from './pages/Test';
import { Test2 } from './pages/Test2';

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname == "/") {
            navigate("/projects");
        }
    }, [location]);
    return (
        <div className="App">
            <Header />
            
            <Routes>
                <Route path='/projects' element={<ProjectList />} />
                <Route path='/projects/:id' element={<Project />} />
                <Route path='/reports' element={<ReportList />} />
                <Route path='/reports/:id' element={<Report />} />
                <Route path='/reports/create' element={<CreateReport />} />
                <Route path='/test' element={<Test />} />
                <Route path='/test2' element={<Test2 />} />
            </Routes>
        </div>
    );
};

export default App;
