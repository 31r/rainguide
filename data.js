        // ==========================================
        // 1. data.js
        // ==========================================
        const csvData = `Start_Node,End_Node,Weight,Type,Description

// --- SAI YING PUN / HKU ---
sai_ying_pun_platform,syp_concourse,2,fare_gate,Fare gates
syp_concourse,eco_tree_hotel,1,internal,Exit A2 to Eco Tree Hotel
hku_platform,hku_concourse,2,fare_gate,Fare gates
hku_concourse,hku_campus,2,elevator,Exit A2 Elevators to HKU Main Campus
hku_concourse,hku_campus_c,2,elevator,Exit C1 Elevators to HKU Centennial Campus
hku_campus,hku_campus_c,2,internal,HKU Internal Walkway

// --- CENTRAL & ADMIRALTY ---
shun_tak_centre,west_spine_west,2,bridge,Bridge along Connaught Road Central
infinitus_plaza,west_spine_west,1,bridge,Bridge over Connaught Road Central
rumsey_carpark,west_spine_west,1,bridge,Bridge along Connaught Road Central
harbour_bldg,west_spine_central,1,bridge,Bridge along Connaught Road Central
two_chinachem,west_spine_east,1,bridge,Bridge along Connaught Road Central
one_ifc,west_spine_east,3,bridge,Bridge along Connaught Road Central
west_spine_west,west_spine_central,3,bridge,Bridge along Connaught Road Central
west_spine_central,west_spine_east,2,bridge,Bridge along Connaught Road Central
one_ifc,ifc_mall,1,internal,Internal IFC Connection
two_ifc,ifc_mall,1,internal,Internal IFC Connection
one_ifc,3_exchange_square,1,bridge,Bridge
hang_seng_hq,one_ifc,2,bridge,Bridge over Connaught Road Central
hang_seng_hq,3_exchange_square,3,bridge,Bridge over Connaught Road Central
3_exchange_square,1&2_exchange_square,2,bridge,Bridge
ifc_mall,1&2_exchange_square,2,bridge,Bridge
yue_thai_bldg,sheung_wan_concourse_mid,2,tunnel,Sheung Wan Exit C
kam_sang_bldg,sheung_wan_concourse_mid,2,tunnel,Sheung Wan Exit B
tung_hip_bldg,sheung_wan_concourse_mid,2,tunnel,Sheung Wan Exit A1
shun_tak_centre,sheung_wan_concourse_mid,3,tunnel,Sheung Wan Exit D
infinitus_plaza,sheung_wan_concourse_east,2,tunnel,Sheung Wan Exit E5
golden_centre,sheung_wan_concourse_east,2,tunnel,Sheung Wan Exit E1
ifc_mall,central_pier_3,2,bridge,Bridge
central_yards,central_pier_7,2,bridge,Bridge
central_pier_3,central_pier_7,3,internal,Covered Walkway
spine_north,central_yards,0.5,bridge,Bridge
spine_north,ifc_mall,0.5,bridge,Bridge
spine_north,spine_mid,1,bridge,Bridge
spine_mid,gpo,0.5,bridge,Bridge
spine_mid,1&2_exchange_square,0.5,bridge,Bridge
spine_mid,jardine_house,0.5,bridge,Bridge
spine_mid,spine_south,1,bridge,Bridge over Connaught Road Central
spine_south,world_wide_house,1,bridge,Bridge
world_wide_house,1&2_exchange_square,2,bridge,Bridge over Connaught Road Central
spine_south,chater_house,0,bridge,Bridge
chater_house,alexandra_house,1,bridge,Bridge over Chater Road
hang_seng_hq,central_market,1,bridge,Bridge over Des Voeux Road Central
central_market,100qrc,2,bridge,Bridge over Queen's Road Central
hang_seng_hq,nexxus_bldg,1,bridge,Bridge over Queen Victoria Street
landmark_gloucester,alexandra_house,1,bridge,Bridge over Des Voeux Road Central
landmark_mall,alexandra_house,1,bridge,Bridge over Des Voeux Road Central
landmark_mall,bea_bldg,1,internal,Internal Landmark Connection
landmark_mall,central_bldg,1,internal,Internal Landmark Connection
central_bldg,central_tower,1,bridge,Bridge over Queen's Road Central
central_tower,entertainment_bldg,1,bridge,Bridge over Wyndham Street
landmark_mall,9qrc,3,bridge,Bridge over Ice House Street
landmark_gloucester,landmark_mall,1,internal,Internal Landmark Connection
landmark_edinburgh,landmark_mall,1,internal,Internal Landmark Connection
landmark_york,landmark_mall,1,internal,Internal Landmark Connection
alexandra_house,princes_bldg,1,bridge,Bridge over Ice House Street
princes_bldg,mandarin_oriental,1,bridge,Bridge over Chater Road
princes_bldg,9qrc,2,bridge,Bridge over Des Voeux Road Central
princes_bldg,scb_bldg,2,bridge,Bridge over Des Voeux Road Central
9qrc,scb_bldg,1,bridge,Short Bridge
scb_bldg,hsbc_bldg,1,bridge,Short Bridge
chater_garden,aia_central,3,bridge,Bridge over Chater Road
chater_garden,the_henderson,3,bridge,Bridge over Murray Road
the_henderson,aia_central,2,bridge,Bridge over Cotton Tree Drive
the_henderson,cheung_kong_centre,3,bridge,Bridge over Queen's Road Central
cheung_kong_centre,three_garden_road,2,bridge,Bridge over Garden Road
three_garden_road,the_murray,1,bridge,Bridge
the_henderson,central_east_node,1,bridge,Bridge
bank_of_america,central_east_node,1,bridge,Bridge over Lambeth Walk
fairmont_house,central_east_node,1,bridge,Bridge
queensway_plaza,central_east_node,3,bridge,Bridge over Cotton Tree Drive
queensway_plaza,admiralty_centre,1,bridge,Bridge
queensway_plaza,far_east_finance,1,bridge,Bridge
queensway_plaza,united_centre,1,internal,Internal Mall Walkway
queensway_plaza,lippo_centre,1,bridge,Bridge
admiralty_centre,central_gov_offices,3,bridge,Bridge over Harcourt Road
citic_tower,admiralty_exit_e2,3,bridge,Bridge over Harcourt Road
citic_tower,central_gov_offices,3,bridge,Bridge over Tim Mei Avenue
united_centre,admiralty_exit_e2,3,bridge,Bridge to MTR
high_court,lippo_centre,3,bridge,Bridge over Queensway
high_court,queensway_gov_offices,1,bridge,Short Bridge
one_ifc,hong_kong_concourse,2,escalator,Hong Kong Exit E
two_ifc,hong_kong_concourse,2,escalator,Hong Kong Exit A
ifc_mall,hong_kong_concourse,2,escalator,Hong Kong Exits A/E/F
world_wide_house,central_concourse_west,2,escalator,Central Exits A/B
chater_house,central_concourse_mid,2,escalator,Central Exit E
alexandra_house,central_concourse_mid,2,escalator,Central Exit H
landmark_mall,central_concourse_mid,2,escalator,Central Exit G
chater_garden,central_concourse_east,2,escalator,Central Exit J2
ccb_tower,central_concourse_east,2,escalator,Central Exit L
queensway_plaza,admiralty_concourse,1,escalator,Admiralty Exits B/C
admiralty_centre,admiralty_concourse,1,escalator,Admiralty Exit A
admiralty_exit_e2,admiralty_concourse,3,escalator,Admiralty Exit E2 Escalator
central_concourse_west,central_concourse_mid,2,tunnel,Central MTR Unpaid Link
central_concourse_mid,central_concourse_east,5,tunnel,Central MTR Unpaid Link
pacific_place_lg1,pacific_place_l2,4,internal,Internal escalators (L1 to L2)
pacific_place_lg1,admiralty_concourse,2,tunnel,Admiralty Exit F
pacific_place_lg1,three_pacific_place,2,tunnel,Tunnel
pacific_place_l2,queensway_gov_offices,1,bridge,Short Bridge
pacific_place_l2,united_centre,3,bridge,Bridge over Queensway
pacific_place_l2,queensway_plaza,2,bridge,Bridge over Queensway
pacific_place_l2,admiralty_exit_e2,3,bridge,Bridge connection to Admiralty Exit E2

// --- CENTRAL TO HONG KONG PAID TUNNEL ---
central_platform_island,hong_kong_platform,5,paid_tunnel,Paid tunnel with moving walkways
hong_kong_platform,hong_kong_concourse,1,fare_gate,Fare gates to HK Station Exits

// --- SHEUNG WAN TO ADMIRALTY MTR PLATFORMS & FARE GATES ---
sheung_wan_platform,sheung_wan_concourse_mid,1,fare_gate,Fare gates to Exits A-D
sheung_wan_platform,sheung_wan_concourse_east,2,fare_gate,Fare gates to Exit E
central_platform_island,central_concourse_west,2,fare_gate,Fare gates to Exits A-D
central_platform_island,central_concourse_mid,2,fare_gate,Fare gates to Exits E-H
central_platform_island,central_concourse_east,3,fare_gate,Fare gates to Exits J-L
admiralty_platform,admiralty_concourse,2,fare_gate,Fare gates to Admiralty Exits

// --- WAN CHAI HUB ---
wan_chai_platform,wan_chai_concourse,1,fare_gate,Fare gates
wan_chai_concourse,china_overseas_bldg,1,internal,Exit C
wan_chai_concourse,immigration_tower,2,bridge,Exit A5 Footbridge
immigration_tower,central_plaza,1,bridge,Bridge to Central Plaza
immigration_tower,revenue_tower,1,escalator,Covered Walkway
central_plaza,hkcec,1,bridge,Bridge to HKCEC
hkcec,great_eagle_ctr,2,bridge,Bridge over Fleming Road
great_eagle_ctr,harbour_ctr,1,internal,Podium
great_eagle_ctr,st_regis,2,bridge,Bridge over Fleming Road
harbour_ctr,wcn_junction,0.5,bridge,Bridge
wcsp,wcn_junction,0.5,bridge,Bridge
causeway_ctr,wcn_junction,1.5,bridge,Bridge
causeway_ctr,shk_ctr,2,escalator,Covered Walkway across Harbour Drive
shk_ctr,capital_ctr,3,bridge,Bridge over Gloucester Road
central_plaza,st_regis,4,bridge,Bridge over Harbour Road
st_regis,cr_bldg,1,internal,Podium
cr_bldg,causeway_ctr,2,internal,Podium
wan_chai_concourse,southorn_stadium,2,internal,Exit B2 to Southorn Stadium
wan_chai_concourse,lee_tung_avenue,2,tunnel,Exit D to Lee Tung Avenue
exhibition_centre_a3,wcn_junction,1.5,bridge,Escalator
exhibition_centre_b3,great_eagle_ctr,2,bridge,Escalator
exhibition_centre_b3,hkcec,3,bridge,Escalator and Bridge over Fleming Road

// --- CAUSEWAY BAY HUB ---
causeway_bay_platform,causeway_bay_concourse_a,1,fare_gate,Fare gates to Exit A (Times Square)
causeway_bay_platform,causeway_bay_concourse_b_c,1,fare_gate,Fare gates to Exits B-C
causeway_bay_platform,causeway_bay_concourse_d_f,1,fare_gate,Fare gates to Exits D-F
causeway_bay_concourse_a,times_square,1,internal,Internal Walkway to Times Square
causeway_bay_concourse_b_c,cwb_plaza,1,internal,Exit B to Causeway Bay Plaza 1
causeway_bay_concourse_d_f,hysan_place,1,internal,Exit F2 to Hysan Place
causeway_bay_concourse_d_f,sogo_cwb,1,internal,Exit D2 to SOGO Basement

// --- FORTRESS HILL HUB ---
fortress_hill_platform,fortress_hill_concourse,1,fare_gate,Fare gates to Exit B
fortress_hill_concourse,fortress_metro_tower,1,escalator,Exit B to Fortress Metro Tower
fortress_metro_tower,fortress_hill_t_junction,2,bridge,Bridge
electric_road_msb,fortress_hill_t_junction,1,bridge,Bridge
harbour_glory,fortress_hill_t_junction,3,bridge,Bridge

// --- NORTH POINT HUB ---
north_point_platform,north_point_concourse,1,fare_gate,Fare gates to Exits A1-A4
north_point_platform,north_point_concourse,1,fare_gate,Fare gates to Exit B
north_point_concourse,odeon_building,1,escalator,Exits A1-A3 to Odeon Building
north_point_concourse,china_united_centre,1,escalator,Exit A4 to China United Centre
north_point_concourse,roca_centre,1,escalator,Exit B to Roca Centre

// --- TAI KOO HUB ---
tai_koo_platform,tai_koo_concourse,1,fare_gate,Fare gates
tai_koo_concourse,cityplaza_gf,2,internal,Exit D2 to Cityplaza G/F
tai_koo_concourse,cityplaza_2f,2,internal,Exit E1 to Cityplaza 2/F
cityplaza_gf,cityplaza_1f,2,internal,Internal Cityplaza Escalators
cityplaza_1f,cityplaza_2f,1,internal,Internal Cityplaza Escalators
cityplaza_gf,horizon_gardens,1,internal,Covered Walkway
cityplaza_1f,kam_din_terrace,1,bridge,Bridge over Tai Mou Avenue
cityplaza_1f,sing_fai_terrace,1,bridge,Bridge over Tai Fung Avenue
cityplaza_2f,east_hk,1,bridge,Bridge
cityplaza_2f,kao_shan_terrace,1,bridge,Bridge over Tai Fung Avenue
cityplaza_2f,12_taikoo,1,bridge,Bridge over Taikoo Wan Road
cityplaza_2f,14_taikoo,1,bridge,Bridge over Taikoo Wan Road
cityplaza_2f,1111_kings,3,internal,Internal Cityplaza Escalators
tai_koo_concourse,kornhill_plaza_n,2,internal,Exit A2 to Kornhill Plaza (North)
tai_koo_concourse,kornhill_plaza_s,2,internal,Exit C to Kornhill Plaza (South)
kornhill_plaza_n,kornhill_plaza_s,1,bridge,Bridge over Kornhill Road
kornhill_plaza_s,kornhill_a-h,4,escalator,Escalator and Bridge
kornhill_plaza_s,kornhill_j-m,3,escalator,Escalator and Bridge
kornhill_a-h,kornhill_j-m,2,staircase,Staircase

// --- SAI WAN HO HUB ---
sai_wan_ho_platform,sai_wan_ho_concourse,1,fare_gate,Fare gates to Exit A
sai_wan_ho_concourse,felicity_garden,1,escalator,Exit A to Felicity Garden

// --- HENG FA CHUEN HUB ---
heng_fa_chuen_platform,heng_fa_chuen_concourse,1,fare_gate,Fare gates
heng_fa_chuen_concourse,paradise_mall,1,internal,MTR direct connection to Mall

// --- CHAI WAN HUB ---
chai_wan_platform,chai_wan_concourse,1,fare_gate,Fare gates to Exit A
chai_wan_concourse,new_jade_garden,1,internal,Exit A to New Jade Garden
hing_wah_1_estate,new_jade_garden,2,bridge,Bridge
new_jade_garden,chai_wan_y_junction,1,bridge,Bridge
wan_tsui_estate,chai_wan_y_junction,2,bridge,Bridge
youth_square,chai_wan_y_junction,1,bridge,Bridge

// --- THE ISLAND LINE (TRAIN TRACKS) ---
kennedy_town_platform,hku_platform,2,paid_train,Island Line (MTR)
hku_platform,sai_ying_pun_platform,2,paid_train,Island Line (MTR)
sai_ying_pun_platform,sheung_wan_platform,2,paid_train,Island Line (MTR)
central_platform_island,sheung_wan_platform,2,paid_train,Island Line (MTR)
admiralty_platform,central_platform_island,2,paid_train,Island Line (MTR)
admiralty_platform,wan_chai_platform,2,paid_train,Island Line (MTR)
wan_chai_platform,causeway_bay_platform,2,paid_train,Island Line (MTR)
causeway_bay_platform,tin_hau_platform,2,paid_train,Island Line (MTR)
tin_hau_platform,fortress_hill_platform,2,paid_train,Island Line (MTR)
fortress_hill_platform,north_point_platform,2,paid_train,Island Line (MTR)
north_point_platform,quarry_bay_platform,2,paid_train,Island Line (MTR)
quarry_bay_platform,tai_koo_platform,2,paid_train,Island Line (MTR)
tai_koo_platform,sai_wan_ho_platform,2,paid_train,Island Line (MTR)
sai_wan_ho_platform,shau_kei_wan_platform,2,paid_train,Island Line (MTR)
shau_kei_wan_platform,heng_fa_chuen_platform,2,paid_train,Island Line (MTR)
heng_fa_chuen_platform,chai_wan_platform,2,paid_train,Island Line (MTR)

// --- ADMIRALTY INTERCHANGE & EAST RAIL LINE ---
admiralty_platform,admiralty_platform_erl,3,paid_transfer,Escalators to East Rail Line platforms
admiralty_platform_erl,exhibition_centre_platform,2,paid_train,East Rail Line (MTR)

// --- EXHIBITION CENTRE HUB ---
exhibition_centre_platform,exhibition_centre_concourse,1,fare_gate,Fare gates
exhibition_centre_concourse,exhibition_centre_a3,1,internal,Exit A3
exhibition_centre_concourse,exhibition_centre_b3,1,internal,Exit B3`;

