import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            width: "90%",
            height: "100%",
            color: "white",
          }}
        >
          <View style={[styles.normal, { flex: 2 }]}>
            <Text style={styles.font_s}>Technician Laboratory Vectrow</Text>
          </View>
          <View style={[styles.normal, { flex: 3, flexDirection: "row" }]}>
            <TouchableOpacity
              style={[
                styles.normal,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <Text style={[styles.font_s, { color: "grey" }]}>회사소개</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.normal,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <Text style={[styles.font_s, { color: "grey" }]}>포트폴리오</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.normal,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <Text style={[styles.font_s, { color: "grey" }]}>제작의뢰</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.normal,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <Text style={[styles.font_s, { color: "grey" }]}>찾아오는길</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.normal,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <Text style={[styles.font_s, { color: "grey" }]}>FAQ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.title}>
        <View style={[{ flex: 5 }]}>
          <ImageBackground
            source={require("./images/main/title.png")}
            style={styles.image}
          >
            <View style={[styles.normal, { flex: 2 }]}>
              <Text
                style={{ fontSize: "3vw", fontWeight: "bold", color: "white" }}
              >
                스토리만 가지고 오세요.
              </Text>
              <Text
                style={{
                  fontSize: "3vw",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                당신의{" "}
                <Text
                  style={{
                    color: "",
                  }}
                >
                  아이디어,
                </Text>{" "}
                저희가 함께 합니다.
              </Text>

              <Text> </Text>
              <Text
                style={[
                  styles.font_s,
                  {
                    fontSize: "1vw",
                    color: "white",
                  },
                ]}
              >
                if you wish that You Make your idea a reality product, Please
                come to Join.
              </Text>
            </View>

            <View style={[styles.normal, { flex: 1 }]}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    justifyContent: "center",
                    alignItems: "center",
                    width: 200,
                    height: 50,
                    backgroundColor: "#262626",
                    borderRadius: "20px",
                  },
                ]}
              >
                <Text style={{ fontSize: 15, color: "white" }}>
                  유튜브 연결
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.normal, { flex: 2.5 }]}></View>
          </ImageBackground>
        </View>
        <View style={[styles.normal, { flex: 3, backgroundColor: "#1a1a1a" }]}>
          <View style={styles.normal}>
            <Text style={styles.font_l}>
              누구나 아이디어를 실현하는 방법은 다릅니다.
            </Text>
            <Text style={styles.font_s}>
              다양한 아이디어를 기반으로한 철저한 분석과 디자인 Proposal을
              기반으로 프로젝트를 만들어 드립니다.
            </Text>
          </View>
          <View style={styles.normal}>
            <Text style={styles.font_l}>하지만 결과물은 다릅니다.</Text>
            <Text style={styles.font_s}>
              처음 기획한 모양과 모습으로 결과물을 얻을수 있습니다. 여러분의
              의지와 노력만 있다면...
            </Text>
          </View>
          <View style={styles.normal}>
            <Text style={styles.font_l}>
              늦지 않았습니다. 저희 TLV가 함께 합니다.
            </Text>
            <Text style={styles.font_s}>
              언제 어디서나 연락하세요~! 그럼 저희가 함께 하겠습니다.
            </Text>
            <Text style={styles.font_s}>
              새로운 디자인과 새로운 형식의 접근으로 여러분의 아이디어
              실현하겠습니다.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        {/* ----- content2 포트폴리오 ----- */}
        <View style={[styles.normal, {}]}>
          {/* 제목부분 */}
          <View style={[styles.normal, { flex: 2 }]}>
            <Text style={[styles.font_l, { color: "#0d0033" }]}>
              최근 포트폴리오
            </Text>
            <Text style={[styles.font_s, {}]}>WHAT WE WORK</Text>
          </View>

          {/* 포트폴리오 주제 탭 부분 */}
          <View style={[styles.normal, { paddingBottom: 50 }]}>
            <View
              style={[
                {
                  width: 800,
                  height: 70,
                  flexDirection: "row",
                },
              ]}
            >
              <TouchableOpacity style={[styles.normal, styles.button]}>
                <Text style={[styles.font_s, { color: "white" }]}>H/W</Text>
              </TouchableOpacity>

              <View style={{ flex: 0.1 }}> </View>

              <TouchableOpacity style={[styles.normal, styles.button]}>
                <Text style={[styles.font_s, { color: "white" }]}>S/W</Text>
              </TouchableOpacity>

              <View style={{ flex: 0.1 }}> </View>

              <TouchableOpacity style={[styles.normal, styles.button]}>
                <Text style={[styles.font_s, { color: "white" }]}>시제품</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/*포트폴리오 사진 세 장 넣을 부분*/}
          <View
            style={[
              styles.box,
              {
                flex: 5,
                flexDirection: "row",
              },
            ]}
          >
            {/*사진1*/}
            <TouchableOpacity style={[styles.normal, styles.shadow]}>
              <View style={[styles.fullbox, { flex: 2 }]}>
                <ImageBackground
                  source={require("./images/main/process_4.png")}
                  style={(styles.image, styles.button, styles.fullbox)}
                ></ImageBackground>
              </View>

              <View
                style={[styles.fullbox, { flex: 1, backgroundColor: "white" }]}
              >
                <View style={{ flex: 1, paddingTop: 20 }}>
                  <Text style={[styles.font_s, { color: "grey" }]}>
                    ○ 제품주제
                  </Text>
                </View>

                <View style={{ flex: 2 }}>
                  <Text style={[styles.font_m, { color: "black" }]}>
                    제품이름
                  </Text>
                </View>

                <View style={{ flex: 1, paddingBottom: 20 }}>
                  <Text style={[styles.font_s, { color: "grey" }]}>
                    ☞ 2020년
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <View style={{ flex: 0.1 }}> </View>

            {/*사진2*/}
            <TouchableOpacity style={[styles.normal, styles.shadow]}>
              <View style={[styles.fullbox, { flex: 2 }]}>
                <ImageBackground
                  source={require("./images/main/process_4.png")}
                  style={(styles.image, styles.button, styles.fullbox)}
                ></ImageBackground>
              </View>

              <View
                style={[styles.fullbox, { flex: 1, backgroundColor: "white" }]}
              ></View>
            </TouchableOpacity>

            <View style={{ flex: 0.1 }}> </View>

            {/*사진3*/}
            <TouchableOpacity style={[styles.normal, styles.shadow]}>
              <View style={[styles.fullbox, { flex: 2 }]}>
                <ImageBackground
                  source={require("./images/main/process_4.png")}
                  style={(styles.image, styles.button, styles.fullbox)}
                ></ImageBackground>
              </View>

              <View
                style={[styles.fullbox, { flex: 1, backgroundColor: "white" }]}
              ></View>
            </TouchableOpacity>
          </View>

          {/*더보기 버튼 넣을 부분*/}
          <View style={[styles.normal, { flex: 1.5 }]}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  justifyContent: "center",
                  alignItems: "center",
                  width: 200,
                  height: 50,
                  backgroundColor: "#0d0033",
                  borderRadius: "20px",
                },
              ]}
            >
              <Text style={{ fontSize: 15, color: "white" }}>
                포트폴리오 더보기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ----- content1 3가지 이유 ----- */}
        <View style={[{ flex: 1 }]}>
          <ImageBackground
            source={require("./images/main/trust.png")}
            style={[
              styles.image,
              { flex: 1, justifyContent: "center", alignItems: "center" },
            ]}
          >
            {/* 제목부분 */}
            <View style={[styles.normal, { flex: 2 }]}>
              <Text style={[styles.font_l, { fontSize: 50, color: "white" }]}>
                믿을 수 있는 3가지 이유
              </Text>
              <Text style={[styles.font_s, { color: "white" }]}>
                클라이언트가 뽑은 TLV의 장점!
              </Text>
            </View>

            {/*세 가지 이유 넣을 부분*/}
            <View style={[styles.box, { flexDirection: "row", flex: 1 }]}>
              <View style={[{ flex: 1 }]}>
                <Text style={[styles.font_m, { color: "white" }]}>
                  <Text
                    style={[
                      { fontSize: 80, fontWeight: "bold", color: "#4dd2ff" },
                    ]}
                  >
                    01
                  </Text>
                  빠른 절차 진행
                </Text>

                <Text style={[styles.font_s, { color: "white" }]}>
                  프로젝트 등록 후 3시간 이내 연락을 통한 견적 {"\n"}및 미팅
                  일정 조율
                </Text>
              </View>
              <View style={[{ flex: 1 }]}>
                <Text style={[styles.font_m]}>
                  <Text
                    style={[
                      { fontSize: 80, fontWeight: "bold", color: "#4dd2ff" },
                    ]}
                  >
                    02
                  </Text>
                  투명한 견적 산출
                </Text>
                <Text style={[styles.font_s, { color: "white" }]}>
                  항목별 정해진 단가 책정으로 고무줄 같지 않은 {"\n"}투명한 견적
                  제공
                </Text>
              </View>
              <View style={[{ flex: 1 }]}>
                <Text style={[styles.font_m, { color: "white" }]}>
                  <Text
                    style={[
                      { fontSize: 80, fontWeight: "bold", color: "#4dd2ff" },
                    ]}
                  >
                    03
                  </Text>{" "}
                  전담 매니지먼트
                </Text>
                <Text style={[styles.font_s, { color: "white" }]}>
                  프로젝트별 전담 개발 매니저를 통해서 신속 정확성{"\n"} 있는
                  개발이 가능
                </Text>
              </View>
            </View>

            {/*공백*/}
            <View style={{ flex: 2 }}></View>
          </ImageBackground>
        </View>

        {/* ----- content3 한눈에 보는 제작 의뢰 과정 ----- */}
        <View style={[styles.normal, { backgroundColor: "#f2f2f2" }]}>
          {/*제목부분*/}
          <View style={[styles.normal, styles.box, { flex: 2 }]}>
            <Text style={[styles.font_l, { color: "#0d0033" }]}>
              시제품 제작 의뢰 과정
            </Text>
            <Text style={[styles.font_s, { color: "grey" }]}>한눈에 보는</Text>
          </View>

          {/*제작 의뢰 단계 넣을 부분*/}
          <View style={[styles.box, { flex: 4, flexDirection: "row" }]}>
            <View style={[{ flex: 1 }]}>
              <View style={[{ flex: 2, backgroundColor: "white" }]}>
                <ImageBackground
                  source={require("./images/main/process_1.png")}
                  style={styles.image}
                ></ImageBackground>
              </View>
              <View style={[styles.normal, { backgroundColor: "white" }]}>
                <Text
                  style={[
                    styles.font_s,
                    { fontWeight: "bold", color: "#1a1a1a" },
                  ]}
                >
                  1. 프로젝트 의뢰
                </Text>
              </View>
            </View>
            <View style={[{ flex: 1 }]}>
              <View style={[{ flex: 2, backgroundColor: "white" }]}>
                <ImageBackground
                  source={require("./images/main/process_2.png")}
                  style={styles.image}
                ></ImageBackground>
              </View>
              <View style={[styles.normal, { backgroundColor: "#e6e6e6" }]}>
                <Text
                  style={[
                    styles.font_s,
                    { fontWeight: "bold", color: "#1a1a1a" },
                  ]}
                >
                  2. 상담 진행
                </Text>
              </View>
            </View>
            <View style={[{ flex: 1 }]}>
              <View style={[{ flex: 2, backgroundColor: "white" }]}>
                <ImageBackground
                  source={require("./images/main/process_3.png")}
                  style={styles.image}
                ></ImageBackground>
              </View>
              <View style={[styles.normal, { backgroundColor: "white" }]}>
                <Text
                  style={[
                    styles.font_s,
                    { fontWeight: "bold", color: "#1a1a1a" },
                  ]}
                >
                  3. 견적서 발송
                </Text>
              </View>
            </View>
            <View style={[{ flex: 1 }]}>
              <View style={[{ flex: 2, backgroundColor: "white" }]}>
                <ImageBackground
                  source={require("./images/main/process_4.png")}
                  style={styles.image}
                ></ImageBackground>
              </View>
              <View style={[styles.normal, { backgroundColor: "#e6e6e6" }]}>
                <Text
                  style={[
                    styles.font_s,
                    { fontWeight: "bold", color: "#1a1a1a" },
                  ]}
                >
                  4. 개발 사양 확인
                </Text>
              </View>
            </View>
            <View style={[{ flex: 1 }]}>
              <View style={[{ flex: 2, backgroundColor: "white" }]}>
                <ImageBackground
                  source={require("./images/main/process_5.png")}
                  style={styles.image}
                ></ImageBackground>
              </View>
              <View style={[styles.normal, { backgroundColor: "white" }]}>
                <Text
                  style={[
                    styles.font_s,
                    { fontWeight: "bold", color: "#1a1a1a" },
                  ]}
                >
                  5. 계약 체결
                </Text>
              </View>
            </View>
          </View>

          {/*공백*/}
          <View style={[styles.normal, { flex: 1 }]}></View>
        </View>

        {/* ----- content4 클라이언트 ----- */}
        <View style={[styles.normal, { backgroundColor: "white" }]}>
          <View style={[styles.box, {}]}>
            <View style={[{ flex: 1 }]}>
              <View style={[styles.normal, { flex: 1 }]}>
                <Text style={[styles.font_l, { color: "#0d0033" }]}>
                  CLIENTS
                </Text>
              </View>
              <View style={[{ flex: 4 }]}>
                <ImageBackground
                  source={require("./images/main/total2.png")}
                  style={styles.image}
                >
                  <View
                    style={[
                      {
                        flex: 1,
                        flexDirection: "row",
                      },
                    ]}
                  >
                    <View style={[{ flex: 1 }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                    <View style={[{ flex: 1 }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                    <View style={[{ flex: 1, backgroundColor: "" }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                    <View style={[{ flex: 1, backgroundColor: "" }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                    <View style={[{ flex: 1, backgroundColor: "" }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                  </View>
                  <View
                    style={[
                      {
                        flex: 1,
                        flexDirection: "row",
                      },
                    ]}
                  >
                    <View style={[{ flex: 1, backgroundColor: "" }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                    <View style={[{ flex: 1, backgroundColor: "" }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                    <View style={[{ flex: 1, backgroundColor: "" }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                    <View style={[{ flex: 1, backgroundColor: "" }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                    <View style={[{ flex: 1, backgroundColor: "" }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                  </View>
                  <View
                    style={[
                      {
                        flex: 1,
                        flexDirection: "row",
                      },
                    ]}
                  >
                    <View style={[{ flex: 1, backgroundColor: "" }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                    <View style={[{ flex: 1, backgroundColor: "" }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                    <View style={[{ flex: 1, backgroundColor: "" }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                    <View style={[{ flex: 1, backgroundColor: "" }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                    <View style={[{ flex: 1, backgroundColor: "" }]}>
                      <ImageBackground></ImageBackground>
                    </View>
                  </View>
                </ImageBackground>
              </View>
              <View style={[styles.normal, { flex: 1 }]}>
                <Text style={styles.font_s}></Text>
              </View>
            </View>
          </View>
        </View>

        {/* ----- content5 contectUs ----- */}
        <View style={[{ flex: 1 }]}>
          <View style={[, { flex: 10 }]}>
            <View style={[{ flex: 1 }]}>
              <ImageBackground
                source={require("./images/main/map.png")}
                style={styles.image}
              >
                <View style={[styles.normal, { flex: 1 }]}>
                  <Text
                    style={[
                      styles.font_l,
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#0d0033",
                      },
                    ]}
                  >
                    content_지도 API
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={[styles.normal, { backgroundColor: "white" }]}>
              <View style={[styles.normal, { flex: 2 }]}>
                <Text style={[styles.font_l, { color: "#0d0033" }]}>
                  CONTACT US
                </Text>
                <Text style={[styles.font_s, {}]}>
                  Nihil officia ut sint molestiae tenetur.
                </Text>
              </View>

              <View style={[styles.box, { flex: 2, flexDirection: "row" }]}>
                <View style={[styles.normal, { backgroundColor: "white" }]}>
                  <Text style={[styles.font_m, { color: "grey" }]}>
                    ADDRESS
                  </Text>
                  <Text style={styles.font_s}> </Text>
                  <Text style={styles.font_s}>
                    A108 Adam Street, NY 535022, USA
                  </Text>
                </View>
                <View style={[styles.normal, { backgroundColor: "white" }]}>
                  <Text style={[styles.font_m, { color: "grey" }]}>
                    PHONE NUMBER
                  </Text>
                  <Text style={styles.font_s}> </Text>
                  <Text style={styles.font_s}>+1 5589 55488 55</Text>
                </View>
                <View style={[styles.normal, { backgroundColor: "white" }]}>
                  <Text style={[styles.font_m, { color: "grey" }]}>EMAIL</Text>
                  <Text style={styles.font_s}> </Text>
                  <Text style={styles.font_s}>info@example.com</Text>
                </View>
              </View>

              <View style={[styles.normal, { flex: 2 }]}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      justifyContent: "center",
                      alignItems: "center",
                      width: 200,
                      height: 40,
                      backgroundColor: "#0d0033",
                      borderRadius: "20px",
                    },
                  ]}
                >
                  <Text style={{ fontSize: 15, color: "white" }}>
                    제작의뢰하기
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.normal,
              {
                flex: 1,
                backgroundColor: "#1a1a1a",
                borderBottomWidth: 1,
                borderColor: "white",
              },
            ]}
          >
            <View
              style={[
                styles.normal,
                {
                  flexDirection: "row",
                  width: "70%",
                  height: "100%",
                },
              ]}
            >
              <TouchableOpacity
                style={[
                  styles.normal,
                  { justifyContent: "center", alignItems: "center" },
                ]}
              >
                <Text style={[styles.font_s, { color: "grey" }]}>회사소개</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.normal,
                  { justifyContent: "center", alignItems: "center" },
                ]}
              >
                <Text style={[styles.font_s, { color: "grey" }]}>
                  포트폴리오
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.normal,
                  { justifyContent: "center", alignItems: "center" },
                ]}
              >
                <Text style={[styles.font_s, { color: "grey" }]}>제작의뢰</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.normal,
                  { justifyContent: "center", alignItems: "center" },
                ]}
              >
                <Text style={[styles.font_s, { color: "grey" }]}>
                  찾아오는길
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.normal,
                  { justifyContent: "center", alignItems: "center" },
                ]}
              >
                <Text style={[styles.font_s, { color: "grey" }]}>FAQ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View
          style={{ height: "100%", width: "70%", backgroundColor: "#1a1a1a" }}
        >
          <View
            style={[
              styles.box,
              styles.normal,
              {
                flex: 1.5,
                borderBottomWidth: 1,
                borderColor: "grey",
              },
            ]}
          >
            <Text style={[styles.font_s, {}]}>
              TECHNICIAN LABORATORY VECTROW
            </Text>
          </View>
          <View style={[{ flex: 3 }]}>
            <View style={[{ flex: 1 }]}></View>
            <View style={[{ flex: 5, flexDirection: "row" }]}>
              <View
                style={[
                  {
                    flex: 1,
                    justifyContent: "center",
                  },
                ]}
              >
                <Text style={[styles.font_s, { fontSize: 10 }]}>
                  Technician Laboratory Vectrow | 대표자: 박도영
                  {"\n"}
                  원주시 흥업면 남원로 150 산학지원관 W4 2층 220호 |
                  사업자등록번호: 102-81-29113
                  {"\n"}
                  통신판매신고번호: 2015-서울강남-01689｜호스팅 서비스: 오렌지
                  비즈니스 서비스
                  {"\n"}
                  고객센터: 02-3432-1854｜FAX: 02-739-9649｜ Email:
                  xneuronic@gmail.com |{"\n"}
                  평일: 10:00 ~ 22:00 | 점심시간: 12:00 ~ 13:00
                </Text>
              </View>

              <View style={[styles.normal, { flexDirection: "row" }]}>
                <View style={[styles.normal, { flex: 1 }]}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        width: 100,
                        height: 100,
                        backgroundColor: "",
                        borderRadius: "20px",
                      },
                    ]}
                  >
                    <Text style={styles.font_s}>유튜브</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.normal, { flex: 1 }]}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        width: 100,
                        height: 100,
                        backgroundColor: "",
                        borderRadius: "20px",
                      },
                    ]}
                  >
                    <Text style={styles.font_s}>인스타그램</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.normal, { flex: 1 }]}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        width: 100,
                        height: 100,
                        backgroundColor: "",
                        borderRadius: "20px",
                      },
                    ]}
                  >
                    <Text style={styles.font_s}>페이스북</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[{ flex: 1 }]}></View>
          </View>
          <View
            style={[
              styles.normal,
              styles.box,
              { borderTopWidth: 1, borderColor: "grey" },
            ]}
          >
            <Text style={styles.font_s}>
              Copyright © 2020 TLV. All rights Reserved.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "6700px",
    backgroundColor: "white",
  },

  header: {
    flexDirection: "row",
    width: "100%",
    height: "70px",
    backgroundColor: "white",
  },

  title: {
    flex: 2,
    backgroundColor: "#0d0033",
  },
  //flex-start, center, flex-end, stretch, baseline

  content: {
    flex: 6,
    backgroundColor: "white",
  },

  footer: {
    width: "100%",
    height: "300px",

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
  },

  box: {
    width: 1100,
    height: "100%",
  },

  normal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  font_s: {
    fontSize: 15,
    color: "grey",
  },

  font_m: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },

  font_l: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },

  border: {
    borderstyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    borderWidth: 0.1,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
  },
  fullbox: {
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#0d0033",
    width: 150,
    height: 50,
    border: 0,
    outline: 0,
    borderRadius: "20px",
  },
  shadow: {
    shadowColor: "#000000", //그림자색
    shadowOpacity: 0.1, //그림자 투명도
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 15,
  },
});