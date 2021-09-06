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
        var scrollNotice;
        return (
            <div>
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
                                <td className="notice_bg" style={{ opacity : this.state.noticeOpacity }}onTouchStart = {this.removeNotice} onMouseDown = {this.removeNotice} onWheel = {this.removeNotice}></td>
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
                                <td className="tal">2020.01~2021.02(1년 2개월)</td>
                                <td>코리안리</td>
                                <td>해외 총판 결제 시스템</td>
                                <td className="tal">전체 페이지 디자인, 퍼블리싱 및 프론트 영역 개발, 운영</td>
                                <td>Spring Framework 내 JSP(HTML), CSS, Javascript를 통한 화면 구현</td>
                                <td>종각 코리안리빌딩</td>
                            </tr>
                            <tr>
                                <td className="tal">2020.02~2020.08(7개월)</td>
                                <td>SK매직</td>
                                <td>SK매직스쿨 웹앱</td>
                                <td className="tal">전체페이지(FO, BO) 퍼블리싱 및 프론트 영역 구축</td>
                                <td>Spring Framework 내 JSP(HTML), CSS, Javascript를 통한 화면 구현</td>
                                <td>서울역 연세 세브란스빌딩</td>
                            </tr>
                            <tr>
                                <td className="tal">2020.08~2021.02(7개월)</td>
                                <td>SK매직</td>
                                <td>SK매직 서비스센터 모바일 웹앱</td>
                                <td className="tal">전체페이지(FO, BO) 퍼블리싱 및 프론트 영역 구축</td>
                                <td>Spring Framework 내 JSP(HTML), CSS, Javascript를 통한 화면 구현</td>
                                <td>서울역 대우재단빌딩</td>
                            </tr>
                            <tr>
                                <td className="tal">2021.03~2021.06(4개월)</td>
                                <td>삼성닷컴</td>
                                <td>삼성닷컴 홈피트니스 서비스</td>
                                <td className="tal">'트레이너리스트', '상품상세', '라운지', '나의구독상품', '팝업 가이드' 퍼블리싱 및 프론트 작업</td>
                                <td>JSP(HTML), SCSS, Javascript를 통한 화면 구현</td>
                                <td>강남 여삼빌딩</td>
                            </tr>
                            <tr>
                                <td className="tal">2021.05~2021.07(3개월)</td>
                                <td>발렉스 서비스</td>
                                <td>직원 및 사업장 관리 시스템</td>
                                <td className="tal">전체 페이지 퍼블리싱 및 프론트 작업</td>
                                <td>vue.js Framework 내 vue, SCSS, javascript를 통한 화면 구현</td>
                                <td>여의도 교보증권빌딩</td>
                            </tr>
                            <tr>
                                <td className="tal">2021.06~2021.08(3개월)</td>
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