import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import './MainFeed.scss';
import addImage from '../../../images/add-image.svg';
import feedLikeDac from '../../../images/like-dac.svg';
import comment from '../../../images/comment.svg';

function MainFeed() {
    const [messages, setMessages] = useState([]);
    const [ws, setWs] = useState(null);

    useEffect(() => {
        // WebSocket 연결 설정
        const socket = new WebSocket('ws://3.36.74.68:8080');

        socket.onopen = () => {
            console.log('WebSocket is connected!');
            socket.send('Hello Server!');
        };

        socket.onmessage = (event) => {
            console.log('Received:', event.data);
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        socket.onclose = () => {
            console.log('WebSocket is closed!');
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        setWs(socket);

        // 컴포넌트 언마운트 시 WebSocket 연결 종료
        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <Header />

            <div className='mainFeed'>
                <div className='wrapper'>
                    <div className='feed-list'>
                        <div className='write-feed'>
                            <div className='profile-image'></div>
                            <div className='inp'>
                                <input type='text' placeholder='오늘 무슨일이 있었나요?' />
                            </div>
                            <div className='get-image'>
                                <label htmlFor='get-image-input'>
                                    <img src={addImage} alt='이미지 추가하기' />
                                </label>
                                <input id='get-image-input' type='file' />
                            </div>
                        </div>

                        <div className='feed'>
                            <div className='top'>
                                <div className='profile-image'>

                                </div>
                                <div className='profile-desc'>
                                    <div className='nickName txt-bold'>
                                        Ellie
                                    </div>
                                    <div className='timestamp'>
                                        8:15 pm, yesterday
                                    </div>
                                </div>
                            </div>
                            <div className='contents'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, qui. Culpa quisquam aliquid illo voluptas quaerat iste, soluta sed, omnis doloribus sequi exercitationem, dolores velit delectus tempore ab. Quidem, odit?
                            </div>
                            <div className='bottom'>
                                <div className='like'>
                                    <div className='asset'>
                                        <img src={feedLikeDac} alt='좋아요' />
                                    </div>
                                    <div className='count txt-bold'>25k</div>
                                </div>
                                <div className='comment'>
                                    <div className='asset'>
                                        <img src={comment} alt='코멘트' />
                                    </div>
                                    <div className='count txt-bold'>2k</div>
                                </div>
                            </div>
                        </div>

                        <div className='feed'>
                            <div className='top'>
                                <div className='profile-image'>

                                </div>
                                <div className='profile-desc'>
                                    <div className='nickName txt-bold'>
                                        Ellie
                                    </div>
                                    <div className='timestamp'>
                                        8:15 pm, yesterday
                                    </div>
                                </div>
                            </div>
                            <div className='contents'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, qui. Culpa quisquam aliquid illo voluptas quaerat iste, soluta sed, omnis doloribus sequi exercitationem, dolores velit delectus tempore ab. Quidem, odit?
                                <div className='image'></div>
                            </div>
                            <div className='bottom'>
                                <div className='like'>
                                    <div className='asset'>
                                        <img src={feedLikeDac} alt='좋아요' />
                                    </div>
                                    <div className='count txt-bold'>60k</div>
                                </div>
                                <div className='comment'>
                                    <div className='asset'>
                                        <img src={comment} alt='코멘트' />
                                    </div>
                                    <div className='count txt-bold'>2k</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='friend-list'>
                        <div className='my-profile'>
                            <div className='profile-image'></div>
                            <div className='nickName'>Ellie</div>
                        </div>

                        <div className='my-friends'>
                            <div className='title txt-bold'>
                                현재 참여자
                            </div>
                            <ul className='friend-list-wrapper'>
                                <li className='friend'>
                                    <div className='profile-image'></div>
                                    <div className='nickname txt-bold'>Mickey_lover</div>
                                </li>
                                <li className='friend'>
                                    <div className='profile-image'></div>
                                    <div className='nickname txt-bold'>Mickey_lover</div>
                                </li>
                                <li className='friend'>
                                    <div className='profile-image'></div>
                                    <div className='nickname txt-bold'>Mickey_lover</div>
                                </li>
                                <li className='friend'>
                                    <div className='profile-image'></div>
                                    <div className='nickname txt-bold'>Mickey_lover</div>
                                </li>
                                <li className='friend'>
                                    <div className='profile-image'></div>
                                    <div className='nickname txt-bold'>Mickey_lover</div>
                                </li>
                                <li className='friend'>
                                    <div className='profile-image'></div>
                                    <div className='nickname txt-bold'>Mickey_lover</div>
                                </li>
                                <li className='friend'>
                                    <div className='profile-image'></div>
                                    <div className='nickname txt-bold'>Mickey_lover</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFeed
