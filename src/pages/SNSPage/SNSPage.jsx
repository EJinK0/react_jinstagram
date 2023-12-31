import React from 'react';
import './SNSPage.scss';
import logo from '../../images/logo.svg';
import arrow from '../../images/arrow.svg'
import { Link } from 'react-router-dom';

function SNSPage() {
  return (
      <div className='login'>
        <div className='wrapper'>
          <div>
            <img src={logo} alt='로고'/>
          </div>
          <form className='login-contents'>
            <div className='email-inp custom-inp'>
              <div className='title txt-bold'>이메일</div>
              <div className='inp'>
                <input type='email' placeholder='이메일을 입력해 주세요.' 
                required />
              </div>
            </div>
            <div className='password-inp custom-inp'>
              <div className='title txt-bold'>비밀번호</div>
              <div className='inp'>
                <input type='password' placeholder='비밀번호를 입력해 주세요.'
                required />
              </div>
            </div>

            <Link className='App-link' to='/mainFeed'>
              <button className='login-btn' type='submit'>로그인 하기</button>
            </Link>
          </form>

          <Link className='App-link' to="/join">
            <div className='go-join'>
              <div className='title txt-bold'>또는 회원가입하기</div>
              <div className='asset'>
                <img src={arrow} alt='회원가입하기'/>
              </div>
            </div>
          </Link>
        </div>
      </div>
  );
}

export default SNSPage;