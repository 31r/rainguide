        // ==========================================
        // 1. data.js
        // ==========================================
        const csvData = `Start_Node,End_Node,Weight,Type,Description

// --- SAI YING PUN / HKU ---
sai_ying_pun_platform,syp_concourse,4,fare_gate,Fare gates
syp_concourse,eco_tree_hotel,2,internal,Exit A2 to Eco Tree Hotel
hku_platform,hku_concourse,4,fare_gate,Fare gates
hku_concourse,hku_campus,4,elevator,Exit A2 Elevators to HKU Main Campus
hku_concourse,hku_campus_c,4,elevator,Exit C1 Elevators to HKU Centennial Campus
hku_campus,hku_campus_c,4,internal,HKU Internal Walkway

// --- CENTRAL & ADMIRALTY ---
shun_tak_centre,west_spine_west,4,bridge,Bridge along Connaught Road Central
infinitus_plaza,west_spine_west,2,bridge,Bridge over Connaught Road Central
rumsey_carpark,west_spine_west,2,bridge,Bridge along Connaught Road Central
harbour_bldg,west_spine_central,2,bridge,Bridge along Connaught Road Central
two_chinachem,west_spine_east,2,bridge,Bridge along Connaught Road Central
one_ifc,west_spine_east,6,bridge,Bridge along Connaught Road Central
west_spine_west,west_spine_central,6,bridge,Bridge along Connaught Road Central
west_spine_central,west_spine_east,4,bridge,Bridge along Connaught Road Central
one_ifc,ifc_mall,4,internal,Internal IFC Connection
two_ifc,ifc_mall,4,internal,Internal IFC Connection
one_ifc,3_exchange_square,2,bridge,Bridge
hang_seng_hq,one_ifc,4,bridge,Bridge over Connaught Road Central
hang_seng_hq,3_exchange_square,4,bridge,Bridge over Connaught Road Central
3_exchange_square,1&2_exchange_square,6,bridge,Bridge
ifc_mall,1&2_exchange_square,4,bridge,Bridge
yue_thai_bldg,sheung_wan_concourse_mid,4,tunnel,Sheung Wan Exit C
kam_sang_bldg,sheung_wan_concourse_mid,4,tunnel,Sheung Wan Exit B
tung_hip_bldg,sheung_wan_concourse_mid,4,tunnel,Sheung Wan Exit A1
shun_tak_centre,sheung_wan_concourse_mid,6,tunnel,Sheung Wan Exit D
infinitus_plaza,sheung_wan_concourse_east,4,tunnel,Sheung Wan Exit E5
golden_centre,sheung_wan_concourse_east,4,tunnel,Sheung Wan Exit E1
ifc_mall,central_pier_3,4,bridge,Bridge
central_yards,central_pier_7,4,bridge,Bridge
central_pier_3,central_pier_7,6,internal,Covered Walkway
spine_north,central_yards,1,bridge,Bridge
spine_north,ifc_mall,1,bridge,Bridge
spine_north,spine_mid,2,bridge,Bridge
spine_mid,gpo,1,bridge,Bridge
spine_mid,1&2_exchange_square,1,bridge,Bridge
spine_mid,jardine_house,1,bridge,Bridge
spine_mid,spine_south,2,bridge,Bridge over Connaught Road Central
spine_south,world_wide_house,2,bridge,Bridge
world_wide_house,1&2_exchange_square,4,bridge,Bridge over Connaught Road Central
spine_south,chater_house,0,bridge,Bridge
chater_house,alexandra_house,2,bridge,Bridge over Chater Road
hang_seng_hq,central_market,2,bridge,Bridge over Des Voeux Road Central
central_market,100qrc,4,bridge,Bridge over Queen's Road Central
hang_seng_hq,nexxus_bldg,2,bridge,Bridge over Queen Victoria Street
landmark_gloucester,alexandra_house,2,bridge,Bridge over Des Voeux Road Central
landmark_mall,alexandra_house,2,bridge,Bridge over Des Voeux Road Central
landmark_mall,bea_bldg,2,internal,Internal Landmark Connection
landmark_mall,central_bldg,2,internal,Internal Landmark Connection
central_bldg,central_tower,2,bridge,Bridge over Queen's Road Central
central_tower,entertainment_bldg,2,bridge,Bridge over Wyndham Street
landmark_mall,9qrc,6,bridge,Bridge over Ice House Street
landmark_gloucester,landmark_mall,2,internal,Internal Landmark Connection
landmark_edinburgh,landmark_mall,2,internal,Internal Landmark Connection
landmark_york,landmark_mall,2,internal,Internal Landmark Connection
alexandra_house,princes_bldg,2,bridge,Bridge over Ice House Street
princes_bldg,mandarin_oriental,2,bridge,Bridge over Chater Road
princes_bldg,9qrc,4,bridge,Bridge over Des Voeux Road Central
princes_bldg,scb_bldg,4,bridge,Bridge over Des Voeux Road Central
9qrc,scb_bldg,2,bridge,Short Bridge
scb_bldg,hsbc_bldg,2,bridge,Short Bridge
chater_garden,aia_central,6,bridge,Bridge over Chater Road
chater_garden,the_henderson,6,bridge,Bridge over Murray Road
the_henderson,aia_central,4,bridge,Bridge over Cotton Tree Drive
the_henderson,cheung_kong_centre,6,bridge,Bridge over Queen's Road Central
cheung_kong_centre,three_garden_road,4,bridge,Bridge over Garden Road
three_garden_road,the_murray,2,bridge,Bridge
the_henderson,central_east_node,2,bridge,Bridge
bank_of_america,central_east_node,2,bridge,Bridge over Lambeth Walk
fairmont_house,central_east_node,2,bridge,Bridge
queensway_plaza,central_east_node,6,bridge,Bridge over Cotton Tree Drive
queensway_plaza,admiralty_centre,2,bridge,Bridge
queensway_plaza,far_east_finance,2,bridge,Bridge
queensway_plaza,united_centre,2,internal,Internal Mall Walkway
queensway_plaza,lippo_centre,2,bridge,Bridge
admiralty_centre,central_gov_offices,6,bridge,Bridge over Harcourt Road
citic_tower,admiralty_exit_e2,6,bridge,Bridge over Harcourt Road
citic_tower,central_gov_offices,6,bridge,Bridge over Tim Mei Avenue
united_centre,admiralty_exit_e2,6,bridge,Bridge to MTR
high_court,lippo_centre,6,bridge,Bridge over Queensway
high_court,queensway_gov_offices,2,bridge,Short Bridge
one_ifc,hong_kong_concourse,4,escalator,Hong Kong Exit E
two_ifc,hong_kong_concourse,4,escalator,Hong Kong Exit A
ifc_mall,hong_kong_concourse,4,escalator,Hong Kong Exits A/E/F
world_wide_house,central_concourse_west,4,escalator,Central Exits A/B
chater_house,central_concourse_mid,4,escalator,Central Exit E
alexandra_house,central_concourse_mid,4,escalator,Central Exit H
landmark_mall,central_concourse_mid,4,escalator,Central Exit G
chater_garden,central_concourse_east,4,escalator,Central Exit J2
ccb_tower,central_concourse_east,4,escalator,Central Exit L
queensway_plaza,admiralty_concourse,2,escalator,Admiralty Exits B/C
admiralty_centre,admiralty_concourse,2,escalator,Admiralty Exit A
admiralty_exit_e2,admiralty_concourse,6,escalator,Admiralty Exit E2 Escalator
central_concourse_west,central_concourse_mid,4,tunnel,Central MTR Unpaid Link
central_concourse_mid,central_concourse_east,10,tunnel,Central MTR Unpaid Link
pacific_place_lg1,pacific_place_l2,8,internal,Internal Escalators
pacific_place_lg1,admiralty_concourse,4,tunnel,Admiralty Exit F
pacific_place_lg1,three_pacific_place,4,tunnel,Tunnel
pacific_place_l2,queensway_gov_offices,2,bridge,Short Bridge
pacific_place_l2,united_centre,6,bridge,Bridge over Queensway
pacific_place_l2,queensway_plaza,4,bridge,Bridge over Queensway
pacific_place_l2,admiralty_exit_e2,6,bridge,Bridge connection to Admiralty Exit E2

// --- CENTRAL TO HONG KONG PAID TUNNEL ---
central_platform_island,hong_kong_platform,10,paid_tunnel,Paid tunnel with moving walkways
hong_kong_platform,hong_kong_concourse,2,fare_gate,Fare gates to HK Station Exits

// --- SHEUNG WAN TO ADMIRALTY MTR PLATFORMS & FARE GATES ---
sheung_wan_platform,sheung_wan_concourse_mid,2,fare_gate,Fare gates to Exits A-D
sheung_wan_platform,sheung_wan_concourse_east,4,fare_gate,Fare gates to Exit E
central_platform_island,central_concourse_west,4,fare_gate,Fare gates to Exits A-D
central_platform_island,central_concourse_mid,4,fare_gate,Fare gates to Exits E-H
central_platform_island,central_concourse_east,6,fare_gate,Fare gates to Exits J-L
admiralty_platform,admiralty_concourse,4,fare_gate,Fare gates to/from Island and Tsuen Wan Line platforms
admiralty_platform_erl,admiralty_concourse,6,fare_gate,Fare gates to/from East Rail and South Island Line platforms

// --- WAN CHAI HUB ---
wan_chai_platform,wan_chai_concourse,2,fare_gate,Fare gates
wan_chai_concourse,china_overseas_bldg,2,internal,Exit C
wan_chai_concourse,immigration_tower,4,bridge,Exit A5 Footbridge
immigration_tower,central_plaza,2,bridge,Bridge to Central Plaza
immigration_tower,revenue_tower,2,escalator,Covered Walkway
central_plaza,hkcec,2,bridge,Bridge to HKCEC
hkcec,great_eagle_ctr,4,bridge,Bridge over Fleming Road
great_eagle_ctr,harbour_ctr,2,internal,Podium
great_eagle_ctr,st_regis,4,bridge,Bridge over Fleming Road
harbour_ctr,wcn_junction,1,bridge,Bridge
wcsp,wcn_junction,1,bridge,Bridge
causeway_ctr,wcn_junction,3,bridge,Bridge
causeway_ctr,shk_ctr,4,escalator,Covered Walkway across Harbour Drive
shk_ctr,capital_ctr,6,bridge,Bridge over Gloucester Road
central_plaza,st_regis,8,bridge,Bridge over Harbour Road
st_regis,cr_bldg,2,internal,Podium
cr_bldg,causeway_ctr,4,internal,Podium
wan_chai_concourse,southorn_stadium,4,internal,Exit B2 to Southorn Stadium
wan_chai_concourse,lee_tung_avenue,4,tunnel,Exit D to Lee Tung Avenue

// --- CAUSEWAY BAY HUB ---
causeway_bay_platform,causeway_bay_concourse_a,2,fare_gate,Fare gates to Exit A (Times Square)
causeway_bay_platform,causeway_bay_concourse_b_c,2,fare_gate,Fare gates to Exits B-C
causeway_bay_platform,causeway_bay_concourse_d_f,2,fare_gate,Fare gates to Exits D-F
causeway_bay_concourse_a,times_square,2,internal,Exit A to Times Square
causeway_bay_concourse_b_c,cwb_plaza,2,internal,Exit B to Causeway Bay Plaza 1
causeway_bay_concourse_d_f,hysan_place,2,internal,Exit F2 to Hysan Place
causeway_bay_concourse_d_f,sogo_cwb,2,internal,Exit D2 to SOGO Basement

// --- FORTRESS HILL HUB ---
fortress_hill_platform,fortress_hill_concourse,2,fare_gate,Fare gates
fortress_hill_concourse,fortress_metro_tower,2,escalator,Exit B to Fortress Metro Tower
fortress_metro_tower,fortress_hill_t_junction,4,bridge,Bridge
electric_road_msb,fortress_hill_t_junction,2,bridge,Bridge
harbour_glory,fortress_hill_t_junction,6,bridge,Bridge

// --- NORTH POINT HUB ---
north_point_platform,north_point_concourse,2,fare_gate,Fare gates
north_point_concourse,odeon_building,2,escalator,Exits A1-A3 to Odeon Building
north_point_concourse,china_united_centre,2,escalator,Exit A4 to China United Centre
north_point_concourse,roca_centre,2,escalator,Exit B to Roca Centre

// --- TAI KOO HUB ---
tai_koo_platform,tai_koo_concourse,2,fare_gate,Fare gates
tai_koo_concourse,cityplaza_gf,4,internal,Exit D2 to Cityplaza G/F
tai_koo_concourse,cityplaza_2f,4,internal,Exit E1 to Cityplaza 2/F
cityplaza_gf,cityplaza_1f,3,internal,Internal Escalators
cityplaza_1f,cityplaza_2f,2,internal,Internal Escalators
cityplaza_gf,horizon_gardens,2,internal,Covered Walkway
cityplaza_1f,kam_din_terrace,2,bridge,Bridge over Tai Mou Avenue
cityplaza_1f,sing_fai_terrace,2,bridge,Bridge over Tai Fung Avenue
cityplaza_2f,east_hk,2,bridge,Bridge
cityplaza_2f,kao_shan_terrace,2,bridge,Bridge over Tai Fung Avenue
cityplaza_2f,12_taikoo,2,bridge,Bridge over Taikoo Wan Road
cityplaza_2f,14_taikoo,2,bridge,Bridge over Taikoo Wan Road
cityplaza_2f,1111_kings,6,internal,Internal Escalators
tai_koo_concourse,kornhill_plaza_n,4,internal,Exit A2 to Kornhill Plaza (North)
tai_koo_concourse,kornhill_plaza_s,4,internal,Exit C to Kornhill Plaza (South)
kornhill_plaza_n,kornhill_plaza_s,2,bridge,Bridge over Kornhill Road
kornhill_plaza_s,kornhill_a-h,8,escalator,Escalator and Bridge
kornhill_plaza_s,kornhill_j-m,6,escalator,Escalator and Bridge
kornhill_a-h,kornhill_j-m,4,staircase,Staircase

// --- SAI WAN HO HUB ---
sai_wan_ho_platform,sai_wan_ho_concourse,2,fare_gate,Fare gates
sai_wan_ho_concourse,felicity_garden,2,escalator,Exit A to Felicity Garden

// --- HENG FA CHUEN HUB ---
heng_fa_chuen_platform,heng_fa_chuen_concourse,2,fare_gate,Fare gates
heng_fa_chuen_concourse,paradise_mall,2,internal,Exit A

// --- CHAI WAN HUB ---
chai_wan_platform,chai_wan_concourse,2,fare_gate,Fare gates
chai_wan_concourse,new_jade_garden,2,internal,Exit A to New Jade Garden
hing_wah_1_estate,new_jade_garden,4,bridge,Bridge
new_jade_garden,chai_wan_y_junction,2,bridge,Bridge
wan_tsui_estate,chai_wan_y_junction,4,bridge,Bridge
youth_square,chai_wan_y_junction,2,bridge,Bridge

// --- THE ISLAND LINE (TRAIN TRACKS) ---
kennedy_town_platform,hku_platform,4,paid_train,Island Line (MTR)
hku_platform,sai_ying_pun_platform,4,paid_train,Island Line (MTR)
sai_ying_pun_platform,sheung_wan_platform,4,paid_train,Island Line (MTR)
central_platform_island,sheung_wan_platform,4,paid_train,Island Line (MTR)
admiralty_platform,central_platform_island,4,paid_train,Island Line (MTR)
admiralty_platform,wan_chai_platform,4,paid_train,Island Line (MTR)
wan_chai_platform,causeway_bay_platform,4,paid_train,Island Line (MTR)
causeway_bay_platform,tin_hau_platform,4,paid_train,Island Line (MTR)
tin_hau_platform,fortress_hill_platform,4,paid_train,Island Line (MTR)
fortress_hill_platform,north_point_platform,4,paid_train,Island Line (MTR)
north_point_platform,quarry_bay_platform,4,paid_train,Island Line (MTR)
quarry_bay_platform,tai_koo_platform,4,paid_train,Island Line (MTR)
tai_koo_platform,sai_wan_ho_platform,4,paid_train,Island Line (MTR)
sai_wan_ho_platform,shau_kei_wan_platform,4,paid_train,Island Line (MTR)
shau_kei_wan_platform,heng_fa_chuen_platform,4,paid_train,Island Line (MTR)
heng_fa_chuen_platform,chai_wan_platform,4,paid_train,Island Line (MTR)

// --- REMAINING ISLAND LINE CONCOURSES ---
kennedy_town_platform,kennedy_town_concourse,2,fare_gate,Fare gates
tin_hau_platform,tin_hau_concourse,2,fare_gate,Fare gates
quarry_bay_platform,quarry_bay_concourse,2,fare_gate,Fare gates
shau_kei_wan_platform,shau_kei_wan_concourse,2,fare_gate,Fare gates

// --- ADMIRALTY INTERCHANGE & EAST RAIL LINE ---
admiralty_platform,admiralty_platform_erl,6,paid_transfer,Platform Level Transfer (Escalators)
admiralty_platform_erl,exhibition_centre_platform,4,paid_train,East Rail Line (MTR)
exhibition_centre_platform,hung_hom_platform,10,paid_train,East Rail Line (MTR)
hung_hom_platform,mong_kok_east_platform,6,paid_train,East Rail Line (MTR)
mong_kok_east_platform,kowloon_tong_platform,6,paid_train,East Rail Line (MTR)
kowloon_tong_platform,tai_wai_platform,10,paid_train,East Rail Line (MTR)
tai_wai_platform,sha_tin_platform,4,paid_train,East Rail Line (MTR)
sha_tin_platform,fo_tan_platform,6,paid_train,East Rail Line (MTR)
sha_tin_platform,racecourse_platform,6,paid_train,East Rail Line (MTR)
fo_tan_platform,university_platform,4,paid_train,East Rail Line (MTR)
racecourse_platform,university_platform,4,paid_train,East Rail Line (MTR)
university_platform,tai_po_market_platform,10,paid_train,East Rail Line (MTR)
tai_po_market_platform,tai_wo_platform,4,paid_train,East Rail Line (MTR)
tai_wo_platform,fanling_platform,10,paid_train,East Rail Line (MTR)
fanling_platform,sheung_shui_platform,4,paid_train,East Rail Line (MTR)
sheung_shui_platform,lo_wu_platform,12,paid_train,East Rail Line (MTR)
sheung_shui_platform,lok_ma_chau_platform,24,paid_train,East Rail Line (MTR)

// --- EXHIBITION CENTRE HUB ---
exhibition_centre_platform,exhibition_centre_concourse,2,fare_gate,Fare gates
exhibition_centre_concourse,exhibition_centre_a3,2,internal,Exit A3
exhibition_centre_concourse,exhibition_centre_b3,2,internal,Exit B3
exhibition_centre_a3,wcn_junction,3,bridge,Escalator
exhibition_centre_b3,great_eagle_ctr,4,bridge,Escalator
exhibition_centre_b3,hkcec,6,bridge,Escalator and Bridge

// --- HUNG HOM HUB ---
hung_hom_platform,hung_hom_concourse,2,fare_gate,Fare gates
hung_hom_concourse,polyu,2,bridge,Exit A1 to PolyU
hung_hom_concourse,royal_peninsula,4,bridge,Exit B1 Footbridge
royal_peninsula,harbour_place,2,bridge,Bridge
harbour_place,stars_by_the_harbour,2,bridge,Bridge
stars_by_the_harbour,one_harbour_gate,2,bridge,Bridge
hung_hom_concourse,new_east_ocean_centre,4,bridge,Exit D1 Footbridge

// --- MONG KOK EAST HUB ---
mong_kok_east_platform,mong_kok_east_concourse,2,fare_gate,Fare gates
mong_kok_east_concourse,moko,2,internal,Exit D to MOKO

// --- KOWLOON TONG HUB ---
kowloon_tong_platform,kowloon_tong_concourse,2,fare_gate,Fare gates
kowloon_tong_concourse,festival_walk,2,internal,Exit C2 to Festival Walk
festival_walk,cityu,2,internal,Tunnel

// --- TAI WAI HUB ---
tai_wai_platform,tai_wai_concourse,2,fare_gate,Fare gates
tai_wai_concourse,the_wai,2,internal,Exits B/H to The Wai
tai_wai_concourse,the_pavilia_farm,2,internal,Exit B to The Pavilia Farm
tai_wai_concourse,tai_wai_pti,2,internal,Exit B to Public Transport Interchange
tai_wai_pti,dragons_range,30,residents_bus,NR839 Residents' Bus
tai_wai_concourse,grandway_garden,2,internal,Exit D to Grandway Garden
the_pavilia_farm,the_wai,2,internal,Covered Walkway
the_wai,festival_city,4,bridge,Bridge

// --- SHA TIN HUB ---
sha_tin_platform,sha_tin_concourse,2,fare_gate,Fare gates
sha_tin_concourse,citylink_mall,2,internal,Exit A2 to Citylink Mall
sha_tin_concourse,new_town_plaza1,2,internal,Exit A3 to New Town Plaza 1
citylink_mall,new_town_plaza1,2,internal,Internal Mall Connection
new_town_plaza1,sha_tin_central_pti,2,escalator,Escalator to PTI
new_town_plaza1,new_town_plaza3,3,bridge,Bridge
new_town_plaza1,wai_wah_centre,2,internal,Internal Mall Connection
wai_wah_centre,hilton_plaza,2,bridge,Bridge
hilton_plaza,scenery_court,2,bridge,Bridge
hilton_plaza,new_town_plaza3,2,bridge,Bridge
new_town_plaza3,royal_park_hotel,2,bridge,Bridge
royal_park_hotel,new_town_tower,2,bridge,Bridge
new_town_plaza1,new_town_tower,2,bridge,Bridge
shatin_plaza,new_town_plaza1,2,internal,Internal Mall Connection
new_town_plaza1,shatin_centre,2,bridge,Bridge
new_town_plaza1,ntp_junction,1,bridge,Bridge
sha_tin_town_hall,ntp_junction,1,bridge,Covered Walkway
sha_tin_library,ntp_junction,1,bridge,Covered Walkway
sha_tin_marriage,ntp_junction,1,bridge,Covered Walkway
shatin_plaza,shatin_centre,2,bridge,Bridge
shatin_centre,lucky_plaza,2,bridge,Bridge
lucky_plaza,sha_tin_junction,1,bridge,Bridge
sha_tin_market,sha_tin_junction,1,bridge,Bridge
lek_yuen_estate,sha_tin_junction,3,bridge,Bridge
lek_yuen_estate,wo_che_estate,8,bridge,Bridge
wo_che_estate,fung_wo_estate,2,bridge,Bridge
sha_tin_central_pti,chun_yeung_estate,20,paid_bus,KMB 285

// --- REMAINING EAST RAIL CONCOURSES (Stubs for future expansion) ---
fo_tan_platform,fo_tan_concourse,2,fare_gate,Fare gates
racecourse_platform,racecourse_concourse,2,fare_gate,Fare gates
university_platform,university_concourse,2,fare_gate,Fare gates
tai_po_market_platform,tai_po_market_concourse,2,fare_gate,Fare gates
tai_wo_platform,tai_wo_concourse,2,fare_gate,Fare gates
fanling_platform,fanling_concourse,2,fare_gate,Fare gates
sheung_shui_platform,sheung_shui_concourse,2,fare_gate,Fare gates
lo_wu_platform,lo_wu_concourse,2,fare_gate,Fare gates
lok_ma_chau_platform,lok_ma_chau_concourse,2,fare_gate,Fare gates`;
