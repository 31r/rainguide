        // ==========================================
        // 1. data.js
        // ==========================================
        const csvData = `Start_Node,End_Node,Weight,Type,Description

// --- AIRPORT EXPRESS (TRAIN TRACKS) ---
hong_kong_platform_ael,airport_platform,48,premium_train,Airport Express (MTR)
kowloon_platform_ael,airport_platform,44,premium_train,Airport Express (MTR)
tsing_yi_platform_ael,airport_platform,28,premium_train,Airport Express (MTR)
tsing_yi_platform_ael,hong_kong_platform_ael,30,premium_train,Airport Express (MTR) Express Service
airport_platform,expo_platform,4,paid_train,Airport Express (MTR)

// --- AIRPORT EXPRESS CONCOURSES ---
hong_kong_platform_ael,hong_kong_concourse,2,fare_gate,Airport Express fare gates
kowloon_platform_ael,kowloon_concourse,2,fare_gate,Airport Express fare gates
tsing_yi_platform_ael,tsing_yi_concourse,2,fare_gate,Airport Express fare gates
expo_platform,expo_concourse,2,fare_gate,Airport Express fare gates

// --- TSUEN WAN LINE (TRAIN TRACKS) ---
tsuen_wan_platform,tai_wo_hau_platform,4,paid_train,Tsuen Wan Line (MTR)
tai_wo_hau_platform,kwai_hing_platform,4,paid_train,Tsuen Wan Line (MTR)
kwai_hing_platform,kwai_fong_platform,4,paid_train,Tsuen Wan Line (MTR)
kwai_fong_platform,lai_king_platform_twl_sb,4,paid_train,Tsuen Wan Line (MTR),uni
lai_king_platform_twl_sb,mei_foo_platform_twl,4,paid_train,Tsuen Wan Line (MTR),uni
mei_foo_platform_twl,lai_king_platform_twl_nb,4,paid_train,Tsuen Wan Line (MTR),uni
lai_king_platform_twl_nb,kwai_fong_platform,4,paid_train,Tsuen Wan Line (MTR),uni
mei_foo_platform_twl,lai_chi_kok_platform,4,paid_train,Tsuen Wan Line (MTR)
lai_chi_kok_platform,cheung_sha_wan_platform,4,paid_train,Tsuen Wan Line (MTR)
cheung_sha_wan_platform,sham_shui_po_platform,4,paid_train,Tsuen Wan Line (MTR)
sham_shui_po_platform,prince_edward_platform_twl,4,paid_train,Tsuen Wan Line (MTR)
prince_edward_platform_twl,mong_kok_platform_twl,3,paid_train,Tsuen Wan Line (MTR)
mong_kok_platform_twl,yaumatei_platform_twl,4,paid_train,Tsuen Wan Line (MTR)
yaumatei_platform_twl,jordan_platform,4,paid_train,Tsuen Wan Line (MTR)
jordan_platform,tsim_sha_tsui_platform,4,paid_train,Tsuen Wan Line (MTR)
tsim_sha_tsui_platform,admiralty_platform_twl,6,paid_train,Tsuen Wan Line (MTR)
admiralty_platform_twl,central_platform_twl,4,paid_train,Tsuen Wan Line (MTR)
central_platform_isl,central_platform_twl,2,paid_transfer,Platform Level Transfer

// --- TRANSFERS (TWL <-> KTL) ---
prince_edward_platform_twl,prince_edward_platform_ktl,3,paid_transfer,Cross-Platform Transfer
mong_kok_platform_twl,mong_kok_platform_ktl,2,paid_transfer,Cross-Platform Transfer
yaumatei_platform_twl,yaumatei_platform_ktl,3,paid_transfer,Vertical Escalator Transfer

// --- TSUEN WAN LINE CONCOURSES ---
tsuen_wan_platform,tsuen_wan_concourse,2,fare_gate,Fare gates
tai_wo_hau_platform,tai_wo_hau_concourse,2,fare_gate,Fare gates
kwai_hing_platform,kwai_hing_concourse,2,fare_gate,Fare gates
kwai_fong_platform,kwai_fong_concourse,2,fare_gate,Fare gates
lai_king_concourse,lai_king_platform_twl_nb,5,fare_gate,Fare gates
lai_king_concourse,lai_king_platform_twl_sb,5,fare_gate,Fare gates
mei_foo_platform_twl,mei_foo_concourse_twl,2,fare_gate,Fare gates
lai_chi_kok_platform,lai_chi_kok_concourse,2,fare_gate,Fare gates
cheung_sha_wan_platform,cheung_sha_wan_concourse,2,fare_gate,Fare gates
sham_shui_po_platform,sham_shui_po_concourse,2,fare_gate,Fare gates
prince_edward_platform_twl,prince_edward_concourse,2,fare_gate,Fare gates
mong_kok_platform_twl,mong_kok_concourse,2,fare_gate,Fare gates
yaumatei_platform_twl,yaumatei_concourse,2,fare_gate,Fare gates
jordan_platform,jordan_concourse,2,fare_gate,Fare gates
tsim_sha_tsui_platform,tsim_sha_tsui_concourse,2,fare_gate,Fare gates

// --- KWUN TONG LINE (TRAIN TRACKS) ---
whampoa_platform,ho_man_tin_platform_ktl,4,paid_train,Kwun Tong Line (MTR)
ho_man_tin_platform_ktl,yaumatei_platform_ktl,6,paid_train,Kwun Tong Line (MTR)
yaumatei_platform_ktl,mong_kok_platform_ktl,4,paid_train,Kwun Tong Line (MTR)
mong_kok_platform_ktl,prince_edward_platform_ktl,3,paid_train,Kwun Tong Line (MTR)
prince_edward_platform_ktl,skm_platform,4,paid_train,Kwun Tong Line (MTR)
skm_platform,kowloon_tong_platform_ktl,4,paid_train,Kwun Tong Line (MTR)
kowloon_tong_platform_ktl,lok_fu_platform,4,paid_train,Kwun Tong Line (MTR)
lok_fu_platform,wong_tai_sin_platform,4,paid_train,Kwun Tong Line (MTR)
wong_tai_sin_platform,diamond_hill_platform_ktl,4,paid_train,Kwun Tong Line (MTR)
diamond_hill_platform_ktl,choi_hung_platform,4,paid_train,Kwun Tong Line (MTR)
choi_hung_platform,kowloon_bay_platform,4,paid_train,Kwun Tong Line (MTR)
kowloon_bay_platform,ngau_tau_kok_platform,4,paid_train,Kwun Tong Line (MTR)
ngau_tau_kok_platform,kwun_tong_platform,4,paid_train,Kwun Tong Line (MTR)
kwun_tong_platform,lam_tin_platform,4,paid_train,Kwun Tong Line (MTR)
lam_tin_platform,yau_tong_platform_ktl,4,paid_train,Kwun Tong Line (MTR)
yau_tong_platform_ktl,tiu_keng_leng_platform_ktl,6,paid_train,Kwun Tong Line (MTR)

// --- TRANSFERS (KTL <-> TKL) ---
yau_tong_platform_ktl,yau_tong_platform_tkl,3,paid_transfer,Cross-Platform Transfer
tiu_keng_leng_platform_ktl,tiu_keng_leng_platform_tkl,2,paid_transfer,Cross-Platform Transfer

// --- KWUN TONG LINE CONCOURSES ---
whampoa_platform,whampoa_concourse,2,fare_gate,Fare gates
ho_man_tin_platform_ktl,ho_man_tin_concourse,2,fare_gate,Fare gates
yaumatei_platform_ktl,yau_ma_tei_concourse,2,fare_gate,Fare gates
mong_kok_platform_ktl,mong_kok_concourse,2,fare_gate,Fare gates
prince_edward_platform_ktl,prince_edward_concourse,2,fare_gate,Fare gates
skm_platform,skm_concourse,2,fare_gate,Fare gates
lok_fu_platform,lok_fu_concourse,2,fare_gate,Fare gates
wong_tai_sin_platform,wong_tai_sin_concourse,2,fare_gate,Fare gates
diamond_hill_platform_ktl,diamond_hill_concourse_ktl,2,fare_gate,Fare gates
choi_hung_platform,choi_hung_concourse,2,fare_gate,Fare gates
kowloon_bay_platform,kowloon_bay_concourse,2,fare_gate,Fare gates
ngau_tau_kok_platform,ngau_tau_kok_concourse,2,fare_gate,Fare gates
kwun_tong_platform,kwun_tong_concourse,2,fare_gate,Fare gates
lam_tin_platform,lam_tin_concourse,2,fare_gate,Fare gates
yau_tong_platform_ktl,yau_tong_concourse,2,fare_gate,Fare gates
tiu_keng_leng_platform_ktl,tiu_keng_leng_concourse,2,fare_gate,Fare gates

// --- ISLAND LINE (TRAIN TRACKS) ---
kennedy_town_platform,hku_platform,4,paid_train,Island Line (MTR)
hku_platform,sai_ying_pun_platform,4,paid_train,Island Line (MTR)
sai_ying_pun_platform,sheung_wan_platform,4,paid_train,Island Line (MTR)
central_platform_isl,sheung_wan_platform,4,paid_train,Island Line (MTR)
admiralty_platform_isl,central_platform_isl,4,paid_train,Island Line (MTR)
admiralty_platform_isl,wan_chai_platform,4,paid_train,Island Line (MTR)
wan_chai_platform,causeway_bay_platform,4,paid_train,Island Line (MTR)
causeway_bay_platform,tin_hau_platform,4,paid_train,Island Line (MTR)
tin_hau_platform,fortress_hill_platform,4,paid_train,Island Line (MTR)
fortress_hill_platform,north_point_platform_isl,4,paid_train,Island Line (MTR)
north_point_platform_isl,quarry_bay_platform_isl,4,paid_train,Island Line (MTR)
quarry_bay_platform_isl,tai_koo_platform,4,paid_train,Island Line (MTR)
tai_koo_platform,sai_wan_ho_platform,4,paid_train,Island Line (MTR)
sai_wan_ho_platform,shau_kei_wan_platform,4,paid_train,Island Line (MTR)
shau_kei_wan_platform,heng_fa_chuen_platform,4,paid_train,Island Line (MTR)
heng_fa_chuen_platform,chai_wan_platform,4,paid_train,Island Line (MTR)

// --- TRANSFERS (ISL <-> TKL) ---
north_point_platform_isl,north_point_platform_tkl,2,paid_transfer,Cross-Platform Transfer
quarry_bay_platform_isl,quarry_bay_platform_tkl,8,paid_tunnel,Vertical Escalator Transfer

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
ifc_mall,central_pier_3,6,bridge,Bridge
central_yards,central_pier_7,6,bridge,Bridge
central_pier_3,central_pier_7,6,internal,Covered Walkway
spine_north,central_yards,1,bridge,Bridge
spine_north,ifc_mall,1,bridge,Bridge
spine_north,spine_mid,5,bridge,Bridge
spine_mid,gpo,1,bridge,Bridge
spine_mid,1&2_exchange_square,1,bridge,Bridge
spine_mid,jardine_house,1,bridge,Bridge
spine_mid,spine_south,5,bridge,Bridge over Connaught Road Central
spine_south,world_wide_house,5,bridge,Bridge
world_wide_house,1&2_exchange_square,6,bridge,Bridge over Connaught Road Central
spine_south,chater_house,0,bridge,Bridge
chater_house,alexandra_house,2,bridge,Bridge over Chater Road
hang_seng_hq,central_market,2,bridge,Bridge over Des Voeux Road Central
central_market,100qrc,4,bridge,Bridge over Queen's Road Central
central_market,mid_levels_escalator,4,bridge,Bridge over Queen's Road Central
100qrc,mid_levels_escalator,2,bridge,Bridge
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
world_wide_house,central_concourse_west,5,escalator,Central Exits A/B
chater_house,central_concourse_mid,4,escalator,Central Exit E
alexandra_house,central_concourse_mid,4,escalator,Central Exit H
landmark_mall,central_concourse_mid,4,escalator,Central Exit G
chater_garden,central_concourse_east,4,escalator,Central Exit J2
ccb_tower,central_concourse_east,4,escalator,Central Exit L
queensway_plaza,admiralty_concourse,2,escalator,Admiralty Exits B/C
admiralty_centre,admiralty_concourse,2,escalator,Admiralty Exit A
admiralty_exit_e2,admiralty_concourse,6,escalator,Admiralty Exit E2 Escalator
central_concourse_west,central_concourse_mid,4,tunnel,Central MTR Unpaid Link
central_concourse_mid,central_concourse_east,4,tunnel,Central MTR Unpaid Link
pacific_place_lg1,pacific_place_l2,8,internal,Internal Escalators
pacific_place_lg1,admiralty_concourse,4,tunnel,Admiralty Exit F
pacific_place_lg1,three_pacific_place,4,tunnel,Tunnel
pacific_place_l2,queensway_gov_offices,2,bridge,Short Bridge
pacific_place_l2,united_centre,6,bridge,Bridge over Queensway
pacific_place_l2,queensway_plaza,4,bridge,Bridge over Queensway
pacific_place_l2,admiralty_exit_e2,6,bridge,Bridge connection to Admiralty Exit E2

// --- CENTRAL TO HONG KONG PAID TUNNEL ---
central_platform_isl,hong_kong_platform,11,paid_tunnel,Paid tunnel with moving walkways
hong_kong_platform,hong_kong_concourse,2,fare_gate,Fare gates to HK Station Exits

// --- SHEUNG WAN TO ADMIRALTY MTR PLATFORMS & FARE GATES ---
sheung_wan_platform,sheung_wan_concourse_mid,2,fare_gate,Fare gates to Exits A-D
sheung_wan_platform,sheung_wan_concourse_east,4,fare_gate,Fare gates to Exit E
central_platform_isl,central_concourse_west,2,fare_gate,Fare gates to Exits A-D
central_platform_isl,central_concourse_mid,2,fare_gate,Fare gates to Exits E-H
central_platform_isl,central_concourse_east,4,fare_gate,Fare gates to Exits J-L
central_platform_twl,central_concourse_west,4,fare_gate,Fare gates to Exits A-D
central_platform_twl,central_concourse_mid,4,fare_gate,Fare gates to Exits E-H
central_platform_twl,central_concourse_east,2,fare_gate,Fare gates to Exits J-L
admiralty_platform_isl,admiralty_concourse,2,fare_gate,Fare gates to/from Island Line platforms
admiralty_platform_twl,admiralty_concourse,2,fare_gate,Fare gates to/from Tsuen Wan Line platforms
admiralty_platform_erl,admiralty_concourse,4,fare_gate,Fare gates to/from East Rail and South Island Line platforms

// --- WAN CHAI HUB ---
wan_chai_platform,wan_chai_concourse,2,fare_gate,Fare gates
wan_chai_concourse,china_overseas_bldg,2,internal,Exit C
wan_chai_concourse,immigration_tower,6,bridge,Exit A5 Footbridge
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
north_point_platform_isl,north_point_concourse,2,fare_gate,Fare gates
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

// --- REMAINING ISLAND LINE CONCOURSES ---
kennedy_town_platform,kennedy_town_concourse,2,fare_gate,Fare gates
tin_hau_platform,tin_hau_concourse,2,fare_gate,Fare gates
quarry_bay_platform_isl,quarry_bay_concourse,2,fare_gate,Fare gates
shau_kei_wan_platform,shau_kei_wan_concourse,2,fare_gate,Fare gates

// --- TUNG CHUNG LINE (TRAIN TRACKS) ---
hong_kong_platform,kowloon_platform,6,paid_train,Tung Chung Line (MTR)
kowloon_platform,olympic_platform,4,paid_train,Tung Chung Line (MTR)
olympic_platform,nam_cheong_platform_tcl,4,paid_train,Tung Chung Line (MTR)
nam_cheong_platform_tcl,lai_king_platform_tcl_nb,10,paid_train,Tung Chung Line (MTR),uni
lai_king_platform_tcl_nb,tsing_yi_platform_tcl,8,paid_train,Tung Chung Line (MTR),uni
tsing_yi_platform_tcl,lai_king_platform_tcl_sb,8,paid_train,Tung Chung Line (MTR),uni
lai_king_platform_tcl_sb,nam_cheong_platform_tcl,10,paid_train,Tung Chung Line (MTR),uni
tsing_yi_platform_tcl,sunny_bay_platform,14,paid_train,Tung Chung Line (MTR)
sunny_bay_platform,tung_chung_platform,18,paid_train,Tung Chung Line (MTR)

// --- TUNG CHUNG LINE CONCOURSES ---
kowloon_platform,kowloon_concourse,2,fare_gate,Fare gates
olympic_platform,olympic_concourse,2,fare_gate,Fare gates
nam_cheong_platform_tcl,nam_cheong_concourse,2,fare_gate,Fare gates
lai_king_concourse,lai_king_platform_tcl_nb,5,fare_gate,Fare gates
lai_king_concourse,lai_king_platform_tcl_sb,5,fare_gate,Fare gates
tsing_yi_platform_tcl,tsing_yi_concourse,2,fare_gate,Fare gates
sunny_bay_platform,sunny_bay_concourse,2,fare_gate,Fare gates
tung_chung_platform,tung_chung_concourse,2,fare_gate,Fare gates

// --- KOWLOON / AUSTIN HUB ---
kowloon_concourse,elements_mall,2,internal,Internal Mall Connection
elements_mall,austin_concourse,15,bridge,Exit B5
elements_mall,west_kowloon_station,15,bridge,Exit M
elements_mall,icc,2,internal,Internal Mall Entrance
elements_mall,the_arch,4,internal,Mall to Residential Lobby
elements_mall,sorrento,4,internal,Mall to Residential Lobby
elements_mall,the_waterfront,4,internal,Mall to Residential Lobby
elements_mall,the_harbourside,4,internal,Mall to Residential Lobby
elements_mall,the_cullinan,4,internal,Mall to Residential Lobby
austin_concourse,west_kowloon_station,2,internal,Exit C to Hong Kong West Kowloon Station,uni
west_kowloon_station,austin_concourse,2,internal,Exit A to Austin Station,uni

// --- OLYMPIC HUB ---
olympic_concourse,olympian_city_one,3,bridge,Exits A2 or E
olympian_city_one,island_harbourview,2,bridge,Bridge
olympian_city_one,bank_of_china_centre,2,internal,Internal Mall Connection
olympic_concourse,hsbc_centre,3,bridge,Exits B or C
hsbc_centre,harbour_green,4,bridge,Bridge
olympian_city_one,harbour_green,5,bridge,Bridge
olympic_concourse,west9zone,3,bridge,Exit C5
west9zone,florient_rise,2,internal,Mall to Residential Lobby
olympic_concourse,olympian_city_two,2,internal,Exit D3
olympian_city_two,olympian_city_three,2,bridge,Bridge
olympian_city_three,the_hermitage,2,internal,Mall to Residential Lobby
olympian_city_two,central_park,2,internal,Mall to Residential Lobby
olympian_city_two,hoi_fu_court,4,internal,Bridge
olympian_city_two,park_avenue,3,internal,Mall to Residential Lobby
central_park,park_avenue,2,internal,Covered Walkway

// --- NAM CHEONG HUB ---
nam_cheong_concourse,v_walk,2,internal,Exits A2 or D2
v_walk,fu_cheong_estate,2,bridge,Bridge
v_walk,cullinan_west,2,internal,Mall to Residential Lobby
v_walk,hoi_tat_estate,6,bridge,Bridge
hoi_tat_estate,sham_shui_po_lcst_building,2,internal,Podium
sham_shui_po_lcst_building,hoi_ying_estate,3,bridge,Bridge
sham_shui_po_lcst_building,aqua_marine,3,bridge,Bridge

// --- LAI KING HUB ---
lai_king_platform_twl_nb,lai_king_platform_tcl_nb,2,paid_transfer,Cross-Platform Transfer (Upper Level)
lai_king_platform_twl_sb,lai_king_platform_tcl_sb,2,paid_transfer,Cross-Platform Transfer (Lower Level)
lai_king_platform_twl_nb,lai_king_platform_tcl_sb,8,paid_transfer,Vertical Escalator Transfer
lai_king_platform_tcl_nb,lai_king_platform_twl_sb,8,paid_transfer,Vertical Escalator Transfer
lai_king_concourse,yin_lai_court,2,internal,Exit A2
lai_king_concourse,lai_king_est_south,4,internal,Exit A3

// --- TSING YI HUB ---
tsing_yi_concourse,maritime_square_1,2,internal,Exits A2, B, F or G
maritime_square_1,tierra_verde,2,internal,Mall to Residential Lobby
maritime_square_1,villa_esplanada,4,bridge,Bridges
tsing_yi_concourse,maritime_square_2,2,bridge,Exit A1
maritime_square_1,maritime_square_2,2,bridge,Bridge
maritime_square_2,cheung_on_estate,4,bridge,Bridge
cheung_on_estate,cheung_fat_estate,5,bridge,Bridge
cheung_on_estate,cheung_on_bus_terminus,5,bridge,Bridge
cheung_on_bus_terminus,cheung_fat_estate,3,covered_walkway,Covered walkway
cheung_on_bus_terminus,sha_tin_central_pti,65,paid_bus,KMB 49X
cheung_fat_estate,cheung_fat_plaza,2,covered_walkway,Covered walkway
cheung_fat_plaza,cheung_on_bus_terminus,2,covered_walkway,Covered walkway
cheung_fat_estate,ching_tai_court,4,covered_walkway,Covered walkway
tsing_yi_concourse,tivoli_garden,9,covered_walkway,Exit B and covered walkway
maritime_square_1,tivoli_garden,8,covered_walkway,Covered walkway
tivoli_garden,serene_garden,4,bridge,Bridge
serene_garden,greenfield_garden,5,bridge,Bridge
tivoli_garden,tsing_yi_municipal_services_building,3,bridge,Bridge
serene_garden,tsing_yi_municipal_services_building,3,bridge,Bridge
tsing_yi_municipal_services_building,tsing_yi_garden,3,bridge,Bridge
tsing_yi_garden,tsing_yi_estate,4,covered_walkway,Covered walkway to Tsing Yi Estate
tsing_yi_concourse,tsing_yi_exit_c,2,internal,Exit C
maritime_square_2,tsing_yi_pti,1,internal,Internal Mall Walkway
tsing_yi_exit_c,park_island,30,residents_bus,NR330 Residents' Bus

// --- TSEUNG KWAN O LINE (TRAIN TRACKS) ---
north_point_platform_tkl,quarry_bay_platform_tkl,4,paid_train,Tseung Kwan O Line (MTR)
quarry_bay_platform_tkl,yau_tong_platform_tkl,8,paid_train,Tseung Kwan O Line (MTR)
yau_tong_platform_tkl,tiu_keng_leng_platform_tkl,6,paid_train,Tseung Kwan O Line (MTR)
tiu_keng_leng_platform_tkl,tseung_kwan_o_platform_eb,4,paid_train,Tseung Kwan O Line (MTR),uni
tseung_kwan_o_platform_eb,hang_hau_platform,4,paid_train,Tseung Kwan O Line (MTR),uni
hang_hau_platform,po_lam_platform,4,paid_train,Tseung Kwan O Line (MTR)
tseung_kwan_o_platform_eb,lohas_park_platform,7,paid_train,Tseung Kwan O Line (MTR),uni
hang_hau_platform,tseung_kwan_o_platform_wb,4,paid_train,Tseung Kwan O Line (MTR),uni
lohas_park_platform,tseung_kwan_o_platform_wb,7,paid_train,Tseung Kwan O Line (MTR),uni
tseung_kwan_o_platform_wb,tiu_keng_leng_platform_tkl,6,paid_train,Tseung Kwan O Line (MTR),uni
tseung_kwan_o_platform_wb,tseung_kwan_o_platform_eb,2,paid_transfer,Cross-Platform Transfer

// --- TSEUNG KWAN O LINE CONCOURSES ---
north_point_platform_tkl,north_point_concourse,2,fare_gate,Fare gates
quarry_bay_platform_tkl,quarry_bay_concourse,2,fare_gate,Fare gates
yau_tong_platform_tkl,yau_tong_concourse,2,fare_gate,Fare gates
tiu_keng_leng_platform_tkl,tiu_keng_leng_concourse,2,fare_gate,Fare gates
tseung_kwan_o_platform_eb,tseung_kwan_o_concourse,2,fare_gate,Fare gates
tseung_kwan_o_platform_wb,tseung_kwan_o_concourse,2,fare_gate,Fare gates
hang_hau_platform,hang_hau_concourse,2,fare_gate,Fare gates
po_lam_platform,po_lam_concourse,2,fare_gate,Fare gates
lohas_park_platform,lohas_park_concourse,2,fare_gate,Fare gates

// --- ADMIRALTY INTERCHANGE & EAST RAIL LINE ---
admiralty_platform_isl,admiralty_platform_twl,3,paid_transfer,Cross-Platform Transfer
admiralty_platform_isl,admiralty_platform_erl,5,paid_transfer,Platform Level Transfer (Escalators)
admiralty_platform_twl,admiralty_platform_erl,5,paid_transfer,Platform Level Transfer (Escalators)
admiralty_platform_sil,admiralty_platform_twl,7,paid_transfer,Platform Level Transfer (Escalators)
admiralty_platform_sil,admiralty_platform_isl,7,paid_transfer,Platform Level Transfer (Escalators)
admiralty_platform_erl,admiralty_platform_sil,2,paid_transfer,Platform Level Transfer (Escalators)
admiralty_platform_erl,exhibition_centre_platform,4,paid_train,East Rail Line (MTR)
exhibition_centre_platform,hung_hom_platform_erl,6,paid_train,East Rail Line (MTR)
hung_hom_platform_erl,mong_kok_east_platform,6,paid_train,East Rail Line (MTR)
mong_kok_east_platform,kowloon_tong_platform_erl,6,paid_train,East Rail Line (MTR)
kowloon_tong_platform_erl,tai_wai_platform_erl,10,paid_train,East Rail Line (MTR)
tai_wai_platform_erl,sha_tin_platform,4,paid_train,East Rail Line (MTR)
sha_tin_platform,fo_tan_platform,6,paid_train,East Rail Line (MTR)
sha_tin_platform,racecourse_platform,6,paid_train,East Rail Line (MTR)
fo_tan_platform,university_platform,4,paid_train,East Rail Line (MTR)
racecourse_platform,university_platform,4,paid_train,East Rail Line (MTR)
university_platform,tai_po_market_platform,10,paid_train,East Rail Line (MTR)
tai_po_market_platform,tai_wo_platform,4,paid_train,East Rail Line (MTR)
tai_wo_platform,fanling_platform,10,paid_train,East Rail Line (MTR)
fanling_platform,sheung_shui_platform_nb,4,paid_train,East Rail Line (MTR),uni
sheung_shui_platform_nb,lo_wu_platform,12,paid_train,East Rail Line (MTR),uni
sheung_shui_platform_nb,lok_ma_chau_platform,24,paid_train,East Rail Line (MTR),uni
lo_wu_platform,sheung_shui_platform_sb,12,paid_train,East Rail Line (MTR),uni
lok_ma_chau_platform,sheung_shui_platform_sb,24,paid_train,East Rail Line (MTR),uni
sheung_shui_platform_sb,fanling_platform,4,paid_train,East Rail Line (MTR),uni

// --- EXHIBITION CENTRE HUB ---
exhibition_centre_platform,exhibition_centre_concourse,2,fare_gate,Fare gates
exhibition_centre_concourse,wcn_junction,3,bridge,Exit A3 Escalator
exhibition_centre_concourse,great_eagle_ctr,4,bridge,Exit B3 Escalator
exhibition_centre_concourse,hkcec,6,bridge,Exit B3 Escalator and Bridge

// --- HUNG HOM HUB ---
hung_hom_platform_erl,hung_hom_concourse,2,fare_gate,Fare gates
hung_hom_concourse,polyu,2,bridge,Exit A1 to PolyU
hung_hom_concourse,royal_peninsula,4,bridge,Exit B1 Footbridge
royal_peninsula,harbour_place,2,bridge,Bridge
harbour_place,stars_by_the_harbour,2,bridge,Bridge
stars_by_the_harbour,one_harbour_gate,2,bridge,Bridge
hung_hom_concourse,new_east_ocean_centre,4,bridge,Exit D1 Footbridge

// --- MONG KOK HUB ---
mong_kok_east_platform,mong_kok_east_concourse,2,fare_gate,Fare gates
mong_kok_east_concourse,moko,2,internal,Exit D
mong_kok_concourse,moko,16,bridge,Exit B3 and Footbridge
mong_kok_concourse,top_mall,2,internal,Exit B4
mong_kok_concourse,langham_place,4,internal,Exit C3
langham_place,cordis_hotel,6,bridge,Bridge
mong_kok_concourse,argyle_centre,2,internal,Exit D2
top_mall,argyle_centre,3,bridge,Bridge
top_mall,700_nathan_road,1,internal,Escalators

// --- KOWLOON TONG HUB ---
kowloon_tong_platform_ktl,kowloon_tong_platform_erl,9,paid_tunnel,Pedestrian Subway (Paid Area)
kowloon_tong_concourse_ktl,kowloon_tong_concourse_erl,10,internal,Pedestrian Subway (Free Area)
kowloon_tong_platform_ktl,kowloon_tong_concourse_ktl,2,fare_gate,Fare gates
kowloon_tong_platform_erl,kowloon_tong_concourse_erl,2,fare_gate,Fare gates
kowloon_tong_concourse_ktl,festival_walk,6,internal,Exit C2
kowloon_tong_concourse_ktl,kltesc,2,internal,Exit E
kowloon_tong_concourse_erl,festival_walk,6,internal,Exit H
festival_walk,cityu,2,internal,Tunnel

// --- TAI WAI HUB ---
tai_wai_platform,tai_wai_concourse,2,fare_gate,Fare gates
tai_wai_concourse,the_wai,2,internal,Exits B/H to The Wai
tai_wai_concourse,the_pavilia_farm,2,internal,Exit B to The Pavilia Farm
tai_wai_concourse,tai_wai_pti,2,internal,Exit B to Public Transport Interchange
tai_wai_pti,dragons_range,30,residents_bus,NR839 Residents' Bus
tai_wai_pti,heung_yuen_wai_port,50,paid_bus,Citybus B8
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
sha_tin_central_pti,mei_tin_estate,20,paid_bus,KMB 283
sha_tin_central_pti,chun_yeung_estate,20,paid_bus,KMB 285

// --- TAI PO MARKET HUB ---
tai_po_market_platform,tai_po_market_concourse,2,fare_gate,Fare gates
tai_po_market_concourse,uptown_plaza,2,internal,Exit A1 to Uptown Plaza
uptown_plaza,wan_tau_tong_estate,2,bridge,Footbridge to Wan Tau Tong Estate
tai_po_market_concourse,tai_po_market_pti,2,internal,Exit A3 to Tai Po Market PTI
tai_po_market_pti,fu_shin_estate,15,paid_bus,MTR Feeder Bus K17
tai_po_market_pti,kwong_fuk_estate,15,paid_bus,MTR Feeder Bus K18
fu_shin_estate,kwong_fuk_estate,10,paid_bus,KMB 71K to Tai Po Market,uni

// --- TAI WO HUB ---
tai_wo_platform,tai_wo_concourse,2,fare_gate,Fare gates
tai_wo_concourse,tai_wo_plaza_west,2,internal,Exit A
tai_wo_concourse,tai_wo_plaza_east,2,internal,Exit B
tai_wo_plaza_west,tai_wo_plaza_east,2,internal,Internal Mall Connection
tai_wo_plaza_west,tai_wo_bus_terminus,2,escalator,Escalator
tai_wo_bus_terminus,fu_tip_estate,20,paid_bus,KMB 72K

// --- FANLING HUB ---
fanling_platform,fanling_concourse,2,fare_gate,Fare gates
fanling_concourse,fanling_town_center,2,bridge,Exit A1
fanling_town_center,fanling_centre,2,bridge,Bridge
fanling_town_center,cheung_wah_estate,3,bridge,Bridge
fanling_concourse,ka_fuk_estate,8,bridge,Exit B and Covered Walkway
ka_fuk_estate,ka_shing_court,2,bridge,Covered Walkway
fanling_concourse,fanling_station_road,2,bridge,Exit A2 and Covered Walkway
fanling_station_road,heung_yuen_wai_port,20,paid_bus,Citybus B7

// --- SHEUNG SHUI HUB ---
sheung_shui_concourse,landmark_north,2,bridge,Exit A4
landmark_north,spot,2,bridge,Bridge
landmark_north,metropolis_plaza,2,bridge,Bridge
metropolis_plaza,lung_fung_garden,2,bridge,Bridge
lung_fung_garden,shek_wu_hui_municipal_services_building,2,bridge,Bridge
shek_wu_hui_municipal_services_building,sheung_shui_centre,2,bridge,Bridge
sheung_shui_concourse,sheung_shui_centre,2,bridge,Exit B2
sheung_shui_centre,sheung_shui_town_centre,2,bridge,Bridge
sheung_shui_town_centre,sunningdale_garden,2,bridge,Bridge
sheung_shui_concourse,choi_yuen_estate,4,bridge,Exit A1
landmark_north,sheung_shui_junction,4,bridge,Bridge
sheung_shui_junction,choi_yuen_estate,2,bridge,Bridge
choi_yuen_estate,choi_po_court,2,bridge,Covered Walkway
sheung_shui_junction,po_shek_wu_estate,2,bridge,Bridge

// --- SHEUNG SHUI FARE GATES & TRANSFERS ---
sheung_shui_concourse,sheung_shui_platform_nb,2,fare_gate,Fare gates
sheung_shui_concourse,sheung_shui_platform_sb,2,fare_gate,Fare gates
sheung_shui_platform_nb,sheung_shui_platform_sb,3,paid_transfer,Vertical Concourse Transfer

// --- BORDER CROSSINGS ---
heung_yuen_wai_port,liantang_port,5,bridge,Border Crossing
lo_wu_concourse,lo_wu_port,5,bridge,Border Crossing
lok_ma_chau_concourse,futian_port,5,bridge,Border Crossing

// --- REMAINING EAST RAIL LINE CONCOURSES ---
fo_tan_platform,fo_tan_concourse,2,fare_gate,Fare gates
fo_tan_concourse,palazzo,4,bridge,Exit A and Bridge
racecourse_platform,racecourse_concourse,2,fare_gate,Fare gates
university_platform,university_concourse,2,fare_gate,Fare gates
university_concourse,cyt_building,2,bridge,Exit B and Covered Walkway
lo_wu_platform,lo_wu_concourse,2,fare_gate,Fare gates
lok_ma_chau_platform,lok_ma_chau_concourse,2,fare_gate,Fare gates

// --- SOUTH ISLAND LINE (TRAIN TRACKS) ---
admiralty_platform_sil,ocean_park_platform,12,paid_train,South Island Line (MTR)
ocean_park_platform,wong_chuk_hang_platform,3,paid_train,South Island Line (MTR)
wong_chuk_hang_platform,lei_tung_platform,5,paid_train,South Island Line (MTR)
lei_tung_platform,south_horizons_platform,4,paid_train,South Island Line (MTR)

// --- SOUTH ISLAND LINE CONCOURSES ---
ocean_park_platform,ocean_park_concourse,2,fare_gate,Fare gates
wong_chuk_hang_platform,wong_chuk_hang_concourse,2,fare_gate,Fare gates
lei_tung_platform,lei_tung_concourse,2,fare_gate,Fare gates
south_horizons_platform,south_horizons_concourse,2,fare_gate,Fare gates

// --- TUEN MA LINE (TRAIN TRACKS) ---
tuen_mun_platform,siu_hong_platform,5,paid_train,Tuen Ma Line (MTR)
siu_hong_platform,tin_shui_wai_platform,10,paid_train,Tuen Ma Line (MTR)
tin_shui_wai_platform,long_ping_platform,9,paid_train,Tuen Ma Line (MTR)
long_ping_platform,yuen_long_platform,4,paid_train,Tuen Ma Line (MTR)
yuen_long_platform,kam_sheung_road_platform,7,paid_train,Tuen Ma Line (MTR)
kam_sheung_road_platform,tsuen_wan_west_platform,13,paid_train,Tuen Ma Line (MTR)
tsuen_wan_west_platform,mei_foo_platform_tml,8,paid_train,Tuen Ma Line (MTR)
mei_foo_platform_tml,nam_cheong_platform_tml,7,paid_train,Tuen Ma Line (MTR)
nam_cheong_platform_tml,austin_platform,6,paid_train,Tuen Ma Line (MTR)
austin_platform,east_tst_platform,6,paid_train,Tuen Ma Line (MTR)
east_tst_platform,hung_hom_platform_tml,5,paid_train,Tuen Ma Line (MTR)
hung_hom_platform_tml,ho_man_tin_platform_tml,4,paid_train,Tuen Ma Line (MTR)
ho_man_tin_platform_tml,to_kwa_wan_platform,4,paid_train,Tuen Ma Line (MTR)
to_kwa_wan_platform,sung_wong_toi_platform,4,paid_train,Tuen Ma Line (MTR)
sung_wong_toi_platform,kai_tak_platform,4,paid_train,Tuen Ma Line (MTR)
kai_tak_platform,diamond_hill_platform_tml,5,paid_train,Tuen Ma Line (MTR)
diamond_hill_platform_tml,hin_keng_platform,9,paid_train,Tuen Ma Line (MTR)
hin_keng_platform,tai_wai_platform_tml,5,paid_train,Tuen Ma Line (MTR)
tai_wai_platform_tml,che_kung_temple_platform,4,paid_train,Tuen Ma Line (MTR)
che_kung_temple_platform,sha_tin_wai_platform,3,paid_train,Tuen Ma Line (MTR)
sha_tin_wai_platform,city_one_platform,4,paid_train,Tuen Ma Line (MTR)
city_one_platform,shek_mun_platform,3,paid_train,Tuen Ma Line (MTR)
shek_mun_platform,tai_shui_hang_platform,6,paid_train,Tuen Ma Line (MTR)
tai_shui_hang_platform,heng_on_platform,3,paid_train,Tuen Ma Line (MTR)
heng_on_platform,ma_on_shan_platform,4,paid_train,Tuen Ma Line (MTR)
ma_on_shan_platform,wu_kai_sha_platform,5,paid_train,Tuen Ma Line (MTR)

// --- TUEN MA LINE TRANSFERS ---
mei_foo_platform_tml,mei_foo_platform_twl,15,paid_tunnel,Walkways and Escalators
nam_cheong_platform_tml,nam_cheong_platform_tcl,4,paid_transfer,Platform Transfer
east_tst_concourse,tsim_sha_tsui_concourse,14,internal,Pedestrian Subway
hung_hom_platform_tml,hung_hom_platform_erl,4,paid_transfer,Escalator Transfer
ho_man_tin_platform_tml,ho_man_tin_platform_ktl,8,paid_transfer,Escalator Transfer
diamond_hill_platform_tml,diamond_hill_platform_ktl,7,paid_transfer,Vertical Concourse Transfer
tai_wai_platform_tml,tai_wai_platform_erl,4,paid_transfer,Platform Transfer

// --- TUEN MA LINE CONCOURSES ---
tuen_mun_platform,tuen_mun_concourse,2,fare_gate,Fare gates
siu_hong_platform,siu_hong_concourse,2,fare_gate,Fare gates
tin_shui_wai_platform,tin_shui_wai_concourse,2,fare_gate,Fare gates
long_ping_platform,long_ping_concourse,2,fare_gate,Fare gates
yuen_long_platform,yuen_long_concourse,2,fare_gate,Fare gates
kam_sheung_road_platform,kam_sheung_road_concourse,2,fare_gate,Fare gates
tsuen_wan_west_platform,tsuen_wan_west_concourse,2,fare_gate,Fare gates
mei_foo_platform_tml,mei_foo_concourse_tml,2,fare_gate,Fare gates
nam_cheong_platform_tml,nam_cheong_concourse,2,fare_gate,Fare gates
austin_platform,austin_concourse,2,fare_gate,Fare gates
east_tst_platform,east_tst_concourse,2,fare_gate,Fare gates
hung_hom_platform_tml,hung_hom_concourse,2,fare_gate,Fare gates
ho_man_tin_platform_tml,ho_man_tin_concourse,2,fare_gate,Fare gates
to_kwa_wan_platform,to_kwa_wan_concourse,2,fare_gate,Fare gates
sung_wong_toi_platform,sung_wong_toi_concourse,2,fare_gate,Fare gates
kai_tak_platform,kai_tak_concourse,2,fare_gate,Fare gates
diamond_hill_platform_tml,diamond_hill_concourse,2,fare_gate,Fare gates
hin_keng_platform,hin_keng_concourse,2,fare_gate,Fare gates
tai_wai_platform_tml,tai_wai_concourse,2,fare_gate,Fare gates
che_kung_temple_platform,che_kung_temple_concourse,2,fare_gate,Fare gates
sha_tin_wai_platform,sha_tin_wai_concourse,2,fare_gate,Fare gates
city_one_platform,city_one_concourse,2,fare_gate,Fare gates
shek_mun_platform,shek_mun_concourse,2,fare_gate,Fare gates
tai_shui_hang_platform,tai_shui_hang_concourse,2,fare_gate,Fare gates
heng_on_platform,heng_on_concourse,2,fare_gate,Fare gates
ma_on_shan_platform,ma_on_shan_concourse,2,fare_gate,Fare gates
wu_kai_sha_platform,wu_kai_sha_concourse,2,fare_gate,Fare gates`;

