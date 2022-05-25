import Header from '~/components/Layout/components/Header';
import SildeBar from './SildeBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SildeBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
