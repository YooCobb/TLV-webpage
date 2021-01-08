import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/*header*/}
      <View style={styles.header}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            width: "90%",
            height: "100%",
          }}
        >
          <View style={[styles.normal, { flex: 2, flexDirection: "row" }]}>
            <View style={[styles.normal, { flex: 0.8 }]}></View>
            <View
              style={[
                {
                  flex: 0.5,
                  justifyContent: "center",
                },
              ]}
            >
              <Image
                style={styles.tinyLogo}
                source={require("./images/main/logo.png")}
              />
            </View>

            <View style={[{ flex: 1, justifyContent: "center" }]}>
              <Text style={styles.font_s}>Laboratory Technician Vectrow</Text>
            </View>
            <View style={[{ flex: 0.5 }]}></View>
          </View>
          <View style={[styles.normal, { flex: 2, flexDirection: "row" }]}>
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

      {/*title*/}
      <View style={styles.title}>
        <View style={[{ flex: 5, opacity: 0.9, backgroundColor: "#1a1a1a" }]}>
          <ImageBackground
            source={require("./images/main/process_2.png")}
            style={styles.image}
          >
            <View style={[styles.normal, { flex: 2 }]}></View>
            <View style={[styles.normal]}>
              <Text style={[styles.font_s, { fontSize: 17 }]}>
                TLV는 모든 문의에 실시간, 늦어도 당일내 답변을 준수합니다.
              </Text>
              <View
                style={[
                  styles.normal,
                  { flex: 2, borderBottomWidth: 3, borderColor: "#4dd2ff" },
                ]}
              >
                <Text style={[styles.font_l, { fontSize: 45 }]}>
                  {" "}
                  접수현황{" "}
                </Text>
              </View>

              <View style={[styles.normal]}>
                <View
                  style={[
                    styles.normal,
                    {
                      flexDirection: "row",
                    },
                  ]}
                >
                  <Text style={[styles.font_s, {}]}>home</Text>
                  <Text style={[styles.font_s, {}]}> {">"} </Text>
                  <Text style={[styles.font_s, {}]}>제작의뢰</Text>
                  <Text style={[styles.font_s, {}]}> {">"} </Text>
                  <Text style={[styles.font_s, { color: "#4dd2ff" }]}>
                    상담현황
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.normal]}></View>
          </ImageBackground>
        </View>
      </View>

      {/*content*/}
      <View style={[styles.content]}>
        <View style={[styles.normal, { backgroundColor: "#b3b3b3" }]}>
          <View
            style={[
              styles.box,
              {
                width: 400,
                height: 300,
                backgroundColor: "white",
                borderRadius: "20px",
              },
            ]}
          >
            <View style={[styles.normal, { flex: 2 }]}>
              <Text
                style={[
                  styles.font_m,
                  {
                    fontWeight: "",
                    lineHeight: 50,
                    color: "grey",
                  },
                ]}
              >
                접수현황
              </Text>
              <Text
                style={[
                  styles.font_s,
                  {
                    lineHeight: 20,
                    fontSize: 13,
                  },
                ]}
              >
                접수하셨던 성명과 전화번호를 입력해주세요.
              </Text>
            </View>
            <View style={[{ flex: 3 }]}>
              <View style={[{ flex: 1, flexDirection: "row" }]}>
                <View style={[styles.normal, {}]}></View>
                <View style={[styles.normal, {}]}>
                  <Text style={[styles.font_s, { backgroundColor: "" }]}>
                    성명
                  </Text>
                </View>
                <View
                  style={[styles.normal, styles.border, { margin: 5, flex: 5 }]}
                >
                  <Text style={[styles.font_s, { backgroundColor: "" }]}>
                    성명
                  </Text>
                </View>
                <View style={[styles.normal, {}]}></View>
              </View>
              <View style={[{ flex: 1, flexDirection: "row" }]}>
                <View style={[styles.normal, {}]}></View>
                <View style={[styles.normal, { width: "100%" }]}>
                  <Text style={[styles.font_s, { backgroundColor: "" }]}>
                    번호
                  </Text>
                </View>
                <View
                  style={[styles.normal, styles.border, { margin: 5, flex: 5 }]}
                >
                  <Text style={[styles.font_s, { backgroundColor: "" }]}>
                    휴대전화
                  </Text>
                </View>
                <View style={[styles.normal, {}]}></View>
              </View>
              <View style={[styles.normal, { flex: 2 }]}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      justifyContent: "center",
                      alignItems: "center",
                      width: 100,
                      height: 35,
                      backgroundColor: "#4dd2ff",
                      borderRadius: "30px",
                    },
                  ]}
                >
                  <Text style={[styles.font_s, { color: "white" }]}>확인</Text>
                </TouchableOpacity>
              </View>
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
              LABORATORY TECHNICIAN VECTROW
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
                  Laboratory Technician Vectrow | 대표자: 김현,박도영
                  {"\n"}
                  강원도 원주시 흥업면 연세대길 1, 연세창업보육센터 103호 |
                  사업자등록번호: 799-81-01433
                  {"\n"}
                  Unit 103, Yonsei University Business Incubator Center / 1,
                  Yonseidae-gil, Wonju, Gangwon-do, Republic of Korea
                  {"\n"}
                  고객센터: 033-761-7333 ｜Mobile: 010-5901-4120 | Email:
                  office@vectrow.com |{"\n"}
                  평일: 09:00 ~ 18:00 | 점심시간: 12:00 ~ 13:00
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
              Copyright © 2020 LTV. All rights Reserved.
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
    height: "1500px",
    backgroundColor: "white",
  },

  header: {
    flexDirection: "row",
    width: "100%",
    height: "70px",
    backgroundColor: "white",
  },

  title: {
    width: "100%",
    height: "600px",
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
  tinyLogo: {
    width: 80,
    height: 80,
  },
});
