import React, { Component } from 'react';

class Tools extends Component{
    constructor(props){
        super(props);
        this.removeNotice = this.removeNotice.bind(this);
        this.state = {
            noticeOpacity: 1,
        }
    }

    removeNotice = () => {
        this.setState({
            noticeOpacity: 0,
        })
    }

    render(){
        return (
            <div>
                <div className="wrapper_tool">
                    <h3>Programming Language</h3>
                </div>
                <div className="table_wrapper">
                    <span className="notice_table_scroll" style={{ opacity : this.state.noticeOpacity }}>좌우로 스크롤 하세요</span>
                    <table className="table_type_01">
                        <colgroup>
                            <col width="" />
                        </colgroup>
                        <thead>
                            <tr>
                                <td className="notice_bg" style={{ opacity : this.state.noticeOpacity }} onTouchStart = {this.removeNotice} onMouseDown = {this.removeNotice} onWheel = {this.removeNotice}></td>
                            </tr>
                            <tr>
                                <th></th>
                                <th>Language</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>HTML</td>
                                <td>
                                    <ul>
                                        <li>웹접근성과 웹표준을 준수한 시멘틱 구조 태그 사용</li>
                                        <li>템블릿엔진인 PUG(Jade)를 사용하여 코드의 간소화, 시간 단축</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>CSS/SCSS</td>
                                <td>
                                    <ul>
                                        <li>SCSS(SASS) 컴파일을 통한 코드의 간소화 및 통일, CSS 요소의 변수화, 함수화</li>
                                        <li>인스턴스의 공통화로 CSS 코드 단축</li>
                                        <li>다양한 반응형웹 개발 경험, 다양한 해상도에서 통일 된 화면 출력</li>
                                        <li>브라우저 종류 및 버전의 차이에 따른 크로스 브라우징</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Javascript</td>
                                <td>
                                    <ul>
                                        <li>Vanilla JS, ES6, TypeScript, Jquery 등을 통한 기능구현</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Node.js</td>
                                <td>
                                    <ul>
                                        <li>Node.js 서버를 통해 Express Framework에서 React,Vue,PUG 등을 사용하여 프로젝트 구축</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Vue.js</td>
                                <td>
                                    <ul>
                                        <li>Vue.js 프로젝트 API 구성 및 프론트영역 구축</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>React</td>
                                <td>
                                    <ul>
                                        <li>React 프로젝트 API 구성 및 프론트영역 구축</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>MY-SQL</td>
                                <td>
                                    <ul>
                                        <li>기본적인 CRUD 쿼리작성 및 Ajax 통신으로 데이터를 화면에 출력</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>GitHub</td>
                                <td>
                                    <ul>
                                        <li>git 레퍼지토리를 통한 협업 브랜치, 버전관리</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="wrapper_tool">
                    <h3>Projects</h3>
                </div>
                <div className="table_wrapper">
                    <span className="notice_table_scroll" style={{ opacity : this.state.noticeOpacity }}>좌우로 스크롤 하세요</span>
                    <table className="table_type_01">
                        <colgroup>
                            <col width="" />
                        </colgroup>
                        <thead>
                            <tr>
                                <td className="notice_bg" style={{ opacity : this.state.noticeOpacity }} onTouchStart = {this.removeNotice} onMouseDown = {this.removeNotice} onWheel = {this.removeNotice}></td>
                            </tr>
                            <tr>
                                <th className="tal">시작년월 ~ 종료년월 (기간)</th>
                                <th>클라이언트 명</th>
                                <th>프로젝트 명</th>
                                <th className="tal">담당업무</th>
                                <th>사용 언어 및 개발 방식</th>
                                <th>프로젝트 위치</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tal">2019.11~2020.02 (4개월)</td>
                                <td>아모레퍼시픽</td>
                                <td>오설록 웹사이트 선물하기</td>
                                <td className="tal">선물하기, 선물 수령 페이지 디자인 및 퍼블리싱</td>
                                <td>Spring Framework 내 JSP(HTML), CSS, Javascript를 통한 화면 구현</td>
                                <td>용산 아모레퍼시픽 사옥</td>
                            </tr>
                            <tr>
                                <td className="tal">2020.01~2021.02 (1년 2개월)</td>
                                <td>코리안리</td>
                                <td>해외 총판 결제 시스템</td>
                                <td className="tal">전체 페이지 디자인, 퍼블리싱 및 프론트 영역 개발, 운영</td>
                                <td>Spring Framework 내 JSP(HTML), CSS, Javascript를 통한 화면 구현</td>
                                <td>종각 코리안리빌딩</td>
                            </tr>
                            <tr>
                                <td className="tal">2020.02~2020.08 (7개월)</td>
                                <td>SK매직</td>
                                <td>SK매직스쿨 웹앱</td>
                                <td className="tal">전체페이지(FO, BO) 퍼블리싱 및 프론트 영역 구축</td>
                                <td>Spring Framework 내 JSP(HTML), CSS, Javascript를 통한 화면 구현</td>
                                <td>서울역 연세 세브란스빌딩</td>
                            </tr>
                            <tr>
                                <td className="tal">2020.08~2021.02 (7개월)</td>
                                <td>SK매직</td>
                                <td>SK매직 서비스센터 모바일 웹앱</td>
                                <td className="tal">전체페이지(FO, BO) 퍼블리싱 및 프론트 영역 구축</td>
                                <td>Spring Framework 내 JSP(HTML), CSS, Javascript를 통한 화면 구현</td>
                                <td>서울역 대우재단빌딩</td>
                            </tr>
                            <tr>
                                <td className="tal">2021.03~2021.06 (4개월)</td>
                                <td>삼성닷컴</td>
                                <td>삼성닷컴 홈피트니스 서비스</td>
                                <td className="tal">'트레이너리스트', '상품상세', '라운지', '나의구독상품', '팝업 가이드' 퍼블리싱 및 프론트 작업</td>
                                <td>JSP(HTML), SCSS, Javascript를 통한 화면 구현</td>
                                <td>강남 여삼빌딩</td>
                            </tr>
                            <tr>
                                <td className="tal">2021.05~2021.07 (3개월)</td>
                                <td>발렉스 서비스</td>
                                <td>직원 및 사업장 관리 시스템</td>
                                <td className="tal">전체 페이지 퍼블리싱 및 프론트 작업</td>
                                <td>vue.js Framework 내 vue, SCSS, javascript를 통한 화면 구현</td>
                                <td>여의도 교보증권빌딩</td>
                            </tr>
                            <tr>
                                <td className="tal">2021.06~2021.08 (3개월)</td>
                                <td>SK매직</td>
                                <td>SK매직 카탈로그 웹앱</td>
                                <td className="tal">전체 페이지 퍼블리싱 및 프론트 작업</td>
                                <td>vue.js Framework 내 vue, SCSS, javascript를 통한 화면 구현</td>
                                <td>종각 삼일빌딩</td>
                            </tr>
                            <tr>
                                <td className="tal">2021.07~진행중</td>
                                <td>코리안리</td>
                                <td>코리안리 프라이싱툴 시스템</td>
                                <td className="tal">전체 페이지 퍼블리싱 및 프론트 작업</td>
                                <td>Spring Framework 내 JSP(HTML), SCSS, Javascript를 통한 화면 구현</td>
                                <td>종각 코리안리빌딩</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

export default Tools;