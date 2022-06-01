import React, { useEffect , useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../actions/commentAction';
import SingleComment from './SingleComment';
import CommentsAdd from './CommentsAdd';

const Comments = () => {

    const dispatch = useDispatch();
    const {comments, deleteComment, isLikes } = useSelector(state => state.comments);

  
    useEffect(() => {

        dispatch(getComments())
    }, [dispatch, deleteComment, isLikes]);

    
    const [limit, setLimit] = useState(3);

    const handleLoadMore = () => {
        setLimit(limit + 2)
    }
  

    let commentsQuantity = comments.length - limit


    
    return (
        <div className='comments'>
            <div className="comments__total-count">
                <div>Всего <span>{comments.length}</span>  </div>
                <div className="sort-in-row">Сортировать по:
                    <ul>
                        <li className=" date active-desc"><span>дате</span></li>
                        <li className=" rating"><span>рейтингу</span></li>
                        <li className=" useful"><span>полезности</span></li>
                    </ul>
                </div>
            </div>
            <div>
                {comments.slice(0, limit).map(item => (
                    <SingleComment key={item.id} item={item}/>
                ))}
            </div>
            <div className="comments__show">
                <button onClick={handleLoadMore} className="comments__show-more">Показать еще</button>
                <div className="comments__show-count">осталось {commentsQuantity > 0 ? commentsQuantity : 0} комментариев</div>
            </div>
            <CommentsAdd />
        </div>
    )
}

export default Comments