import Layout from "../containers/Layout";
import Header from "../components/Header";
import Form from "../components/Form";

function Login() {
    return (
        <main>
            <Header></Header>
            <Layout>
                <Form></Form>
            </Layout>
        </main>
      );
}

export default Login;