---
Author: HamishWillee
Status: 초안
---

# 비행 제어 보드 장착

## 방향

거의 모든 비행 제어 보드는 (아래와 같이) *전방 표시 화살표*를 가지고 있습니다. 비행 제어 보드는 반드시 화살표가 (비행기, 멀티로터, VTOL, 지상 기체 등 모든 항공 프레임에서) 기체 정면을 향하도록, 그리고 비행 제어 보드 윗면이 위를 향하도록 놓아야 합니다.

![FC 방향 마크](../../images/fc_heading_mark_1.png)

![FC 방향](../../images/fc_orientation_1.png)

> **참고** 만약 컨트롤러를 권장된/기본 방향으로 장착할 수 없다면 (예: 물리적 제약), 비행 제어 소프트웨어 상 비행 제어 보드의 방향을 실제 [비행 제어 보드의 방향](../config/flight_controller_orientation.md)대로 설정해야 합니다.

## 진동 감쇠

내장된 가속도 센서가 있는 비행 제어 보드는 진동에 민감합니다. 일부 보드는 내장된 진동 흡수 장치를 포함하지만, 다른 보드는 진동 감쇠 테이프가 있어 컨트롤러를 기체로부터 독립시킬 수 있습니다.

![Pixhawk 장착 폼](../../images/3dr_anti_vibration_mounting_foam.png) - Pixhawk 진동 감쇠 폼

비행 컨트롤러 설명서에서 권장하는 진동 감쇠/장착 방법을 사용하십시오.