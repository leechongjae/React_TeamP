
import React, { useState } from 'react';
import usersData from '../data/users.json';//users.json 파일 경로 확인

function Login() {
	const [userId, setUserId] = useState('');  // 사용자 ID 상태
	const [password, setPassword] = useState('');
	const [message, setMessega] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
		console.log('<<지금 로그인 시도합니다>>\n', '아이디: ', userId, '  비밀번호:', password);
		// 로그인 로직 구현, 예: API 호출 등
		const user = usersData.find(user => user.userId === userId && user.password === password);

		if(user){
			setMessega('로그인 되었습니다.');

		}else{
			setMessega('사용자 ID또는 비밀번혹 잘못되었습니다.');
		}
	};

	return (
		<div>
			<h1>로그인 화면</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						사용자 ID:
						<input
							type="text"  // 사용자 ID 입력 필드
							value={userId}
							onChange={e => setUserId(e.target.value)}
							required
						/>
					</label>
				</div>
				<div>
					<label>
						비밀번호:
						<input
							type="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							required							
						/>
					</label>
				</div>
				<button type="submit">
					로그인
				</button>
				<button type="submit">
					회원가입
				</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
}

export default Login;
