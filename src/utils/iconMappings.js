

// Import status icons
import TodoIcon from '../icons/todo.svg';
import InProgressIcon from '../icons/inprogress.svg';
import DoneIcon from '../icons/done.svg';
import BacklogIcon from '../icons/backlog.svg';
import CancelledIcon from '../icons/Cancelled.svg';

// Import priority icons
import UrgentIcon from '../icons/priority-4.svg';
import HighIcon from '../icons/priority-3.svg';
import MediumIcon from '../icons/priority-2.svg';
import LowIcon from '../icons/priority-1.svg';
import NoPriorityIcon from '../icons/priority-0.svg';


export const statusIcons = {
    todo: TodoIcon,
    'in progress': InProgressIcon,
    done: DoneIcon,
    backlog: BacklogIcon,
    cancelled: CancelledIcon
};


export const priorityIcons = {
    urgent: UrgentIcon,
    high: HighIcon,
    medium: MediumIcon,
    low: LowIcon,
    'no priority': NoPriorityIcon
};
