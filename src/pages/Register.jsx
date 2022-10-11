import Layout from "../containers/Layout";
import Header from "../components/Header";
import FormRegister from "../components/FormRegister";

function Register() {
    return ( 
    <main>
        <Header></Header>
        <Layout>
            <FormRegister />
        </Layout>
    </main> );
}

export default Register;