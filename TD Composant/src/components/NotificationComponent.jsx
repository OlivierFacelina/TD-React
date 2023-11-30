// const NotificationComponent = ({ content, type }) => {
//   return (
//     <div className={`notification ${type}`}>
//       {content}
//     </div>
//   );
// }

// export default NotificationComponent;

import { useState } from 'react';
import NotificationButton from './NotificationButton';
import NotificationContent from './NotificationContent';

function NotificationComponent({content = 'Votre message', type, displayCloseBtn = true}) {

    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        setVisible(false);
    }
    return (
        visible ? (
        <div className={`notification ${type}`}>
            <NotificationButton handleClick={handleClick} displayCloseBtn={displayCloseBtn} />
            <NotificationContent content={content} />
        </div>
        ): null
    )
}

export default NotificationComponent;