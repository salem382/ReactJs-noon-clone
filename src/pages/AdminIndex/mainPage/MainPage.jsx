
import AddElement from '../../../components/adminComponent/addElement/AddElement';
import AdminSidebar from '../../../components/adminComponent/adminSidebar/AdminSidebar';

const MainPage = () => {

    return (
        <section className='d-flex'>
            <AdminSidebar />
            <div className='w-100'>
                <AddElement />
            </div>
        </section>
    )
}

export default MainPage;