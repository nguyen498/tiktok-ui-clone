import styles from './SildeBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SildeBar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SideBar</h2>
        </aside>
    );
}

export default SildeBar;
