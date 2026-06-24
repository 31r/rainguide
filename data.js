        // ==========================================
        // 1. data.js
        // ==========================================
        const csvData = `Start_Node,End_Node,Weight,Type,Description,Direction

// --- AIRPORT EXPRESS (TRAIN TRACKS) ---
hong_kong_platform_ael,airport_platform,48,premium_train,Airport Express (MTR)
kowloon_platform_ael,airport_platform,44,premium_train,Airport Express (MTR)
tsing_yi_platform_ael,airport_platform,28,premium_train,Airport Express (MTR)
tsing_yi_platform_ael,hong_kong_platform_ael,30,premium_train,Airport Express (MTR)
airport_platform,expo_platform,4,premium_train,Airport Express (MTR)
airport_platform,expo_platform,5,paid_train,Airport Express (MTR)

// --- AIRPORT EXPRESS CONCOURSES ---
hong_kong_platform_ael,hong_kong_concourse,2,fare_gate,Airport Express fare gates
kowloon_platform_ael,kowloon_concourse,2,fare_gate,Airport Express fare gates
tsing_yi_platform_ael,tsing_yi_concourse,2,fare_gate,Airport Express fare gates
expo_platform,expo_concourse,2,fare_gate,Airport Express fare gates

// --- TSUEN WAN LINE (TRAIN TRACKS) ---
tsuen_wan_platform,tai_wo_hau_platform,3,paid_train,Tsuen Wan Line (MTR)
tai_wo_hau_platform,kwai_hing_platform,4,paid_train,Tsuen Wan Line (MTR)
kwai_hing_platform,kwai_fong_platform,3,paid_train,Tsuen Wan Line (MTR)
kwai_fong_platform,lai_king_platform_twl_sb,4,paid_train,Tsuen Wan Line (MTR),uni
lai_king_platform_twl_sb,mei_foo_platform_twl,4,paid_train,Tsuen Wan Line (MTR),uni
mei_foo_platform_twl,lai_king_platform_twl_nb,4,paid_train,Tsuen Wan Line (MTR),uni
lai_king_platform_twl_nb,kwai_fong_platform,4,paid_train,Tsuen Wan Line (MTR),uni
mei_foo_platform_twl,lai_chi_kok_platform,4,paid_train,Tsuen Wan Line (MTR)
lai_chi_kok_platform,cheung_sha_wan_platform,3,paid_train,Tsuen Wan Line (MTR)
cheung_sha_wan_platform,sham_shui_po_platform,4,paid_train,Tsuen Wan Line (MTR)
sham_shui_po_platform,prince_edward_platform_twl,3,paid_train,Tsuen Wan Line (MTR)
prince_edward_platform_twl,mong_kok_platform_twl,3,paid_train,Tsuen Wan Line (MTR)
mong_kok_platform_twl,yaumatei_platform_twl,4,paid_train,Tsuen Wan Line (MTR)
yaumatei_platform_twl,jordan_platform,4,paid_train,Tsuen Wan Line (MTR)
jordan_platform,tsim_sha_tsui_platform,4,paid_train,Tsuen Wan Line (MTR)
tsim_sha_tsui_platform,admiralty_platform_twl,6,paid_train,Tsuen Wan Line (MTR)
admiralty_platform_twl,central_platform_twl,4,paid_train,Tsuen Wan Line (MTR)
central_platform_isl,central_platform_twl,2,paid_transfer,Platform Level Transfer

// --- TRANSFERS (TWL <-> KTL) ---
prince_edward_platform_twl,prince_edward_platform_ktl,3,paid_transfer,cross-platform transfer
mong_kok_platform_twl,mong_kok_platform_ktl,2,paid_transfer,cross-platform transfer
yaumatei_platform_twl,yaumatei_platform_ktl,3,paid_transfer,vertical escalator transfer

// --- TSUEN WAN LINE CONCOURSES ---
tsuen_wan_platform,tsuen_wan_concourse,2,fare_gate,fare gates
tai_wo_hau_platform,tai_wo_hau_concourse,2,fare_gate,fare gates
kwai_hing_platform,kwai_hing_concourse,2,fare_gate,fare gates
kwai_fong_platform,kwai_fong_concourse,2,fare_gate,fare gates
lai_king_concourse,lai_king_platform_twl_nb,5,fare_gate,fare gates
lai_king_concourse,lai_king_platform_twl_sb,5,fare_gate,fare gates
mei_foo_platform_twl,mei_foo_concourse_twl,2,fare_gate,fare gates
lai_chi_kok_platform,lai_chi_kok_concourse,2,fare_gate,fare gates
cheung_sha_wan_platform,cheung_sha_wan_concourse,2,fare_gate,fare gates
sham_shui_po_platform,sham_shui_po_concourse,2,fare_gate,fare gates
prince_edward_platform_twl,prince_edward_concourse,2,fare_gate,fare gates
mong_kok_platform_twl,mong_kok_concourse,2,fare_gate,fare gates
yaumatei_platform_twl,yau_ma_tei_concourse,2,fare_gate,fare gates
jordan_platform,jordan_concourse,2,fare_gate,fare gates
tsim_sha_tsui_platform,tsim_sha_tsui_concourse,2,fare_gate,fare gates

// --- TSIM SHA TSUI HUB ---
tsim_sha_tsui_concourse,isquare,6,internal,Exits H/R
tsim_sha_tsui_concourse,k11_art_mall,8,internal,Exit D3
east_tst_concourse,k11_art_mall,7,internal,Exits N3/N4
east_tst_concourse,k11_musea,3,internal,Exit J
k11_musea,k11_atelier,3,lift,office lift lobby
k11_musea,regent_hotel,2,internal,internal walkway
k11_musea,rosewood_hotel,2,lift,hotel lobby
east_tst_concourse,sheraton_hotel,3,internal,Exit J
east_tst_concourse,kowloon_hotel,3,internal,Exit L4
east_tst_concourse,one_peking,4,internal,Exit L5
east_tst_concourse,langham_hotel,4,internal,Exit L5
east_tst_concourse,lippo_sun_plaza,4,internal,Exit L5
east_tst_concourse,hong_kong_cultural_centre,5,internal,Exit L6
hong_kong_cultural_centre,hong_kong_space_museum,2,covered_walkway,covered walkway

// --- JORDAN ---
jordan_concourse,champion_building,4,internal,Exit A
jordan_concourse,yue_hwa,4,internal,Exit A
jordan_concourse,fourseas_building,2,internal,Exit D
jordan_concourse,far_east_consortium_building_jordan,2,internal,Exit D
jordan_concourse,prudential_centre,3,internal,Exit E

// --- MONG KOK HUB ---
mong_kok_east_platform,mong_kok_east_concourse,2,fare_gate,fare gates
mong_kok_east_concourse,moko,2,internal,Exit D
mong_kok_concourse,moko,16,bridge,Exit B3 and Footbridge
mong_kok_concourse,top_mall,2,internal,Exit B4
mong_kok_concourse,langham_place,4,internal,Exit C3
langham_place,cordis_hotel,6,bridge,bridge
top_mall,argyle_centre,3,bridge,bridge
top_mall,700_nathan_road,1,lift,office lift lobby

// --- CHEUNG SHA WAN HUB ---
cheung_sha_wan_concourse,lai_kok_estate,3,internal,Exit A1
lai_kok_estate,yee_kok_court,2,covered_walkway,covered walkway
cheung_sha_wan_concourse,un_chau_estate_1,3,internal,Exit C2
un_chau_estate_1,un_chau_shopping_centre,2,covered_walkway,covered walkway
cheung_sha_wan_concourse,un_chau_estate_5,3,internal,Exit A lift

// --- LAI CHI KOK HUB ---
lai_chi_kok_concourse,cheung_sha_wan_plaza,3,internal,Exit A
lai_chi_kok_concourse,liberte,3,internal,Exit D3
liberte,banyan_garden,2,bridge,bridge
liberte,the_pacifica,2,bridge,bridge
banyan_garden,hoi_lai_estate,3,bridge,bridges and covered walkway
lai_chi_kok_concourse,the_pacifica,3,internal,Exit D4

// --- LAI KING HUB ---
lai_king_platform_twl_nb,lai_king_platform_tcl_nb,2,paid_transfer,cross-platform transfer (Upper Level)
lai_king_platform_twl_sb,lai_king_platform_tcl_sb,2,paid_transfer,cross-platform transfer (Lower Level)
lai_king_platform_twl_nb,lai_king_platform_tcl_sb,8,paid_transfer,vertical escalator transfer
lai_king_platform_tcl_nb,lai_king_platform_twl_sb,8,paid_transfer,vertical escalator transfer
lai_king_concourse,yin_lai_court,2,internal,Exit A2
lai_king_concourse,lai_king_est_south,4,internal,Exit A3

// --- MEI FOO HUB ---
mei_foo_concourse_twl,mei_foo_sun_chuen_stages_1_4_8,2,internal,Exit A
mei_foo_concourse_twl,mei_foo_sun_chuen_stages_5_7,2,internal,Exits C and E
mei_foo_concourse_twl,mei_foo_sun_chuen_stage_6,2,internal,Exit B
mei_foo_concourse_tml,ching_lai_court,4,internal,Exit G
mei_foo_concourse_twl,mei_foo_concourse_tml,16,tunnel,MTR Paid Area Pass-through (Validate Octopus at Exit G)

// --- KWAI FONG HUB ---
kwai_fong_concourse,metroplaza,2,bridge,Exits D or E
metroplaza,kwai_chung_plaza,2,bridge,bridge over Hing Ning Road
kwai_chung_plaza,kwai_fong_estate,3,bridge,bridge over Kwai Foo Road
kwai_fong_concourse,new_kwai_fong_gardens,2,covered_walkway,Exits A or B
new_kwai_fong_gardens,kwai_fong_estate,3,bridge,bridge over Kwai Foo Road
kwai_fong_concourse,kwai_fong_station_bus_terminus,2,covered_walkway,Exit A
kwai_fong_station_bus_terminus,new_kwai_fong_gardens,2,internal,Lifts
new_kwai_fong_gardens,kwai_fong_multi_storey_car_park,2,bridge,bridge over Kwai Yi Road
kwai_fong_station_bus_terminus,lei_muk_shue_estate,22,paid_bus,KMB 36M
kwai_fong_station_bus_terminus,shek_lei_tai_loong_street_bus_terminus,26,paid_bus,KMB 31M,uni
kwai_fong_station_bus_terminus,tmtplaza,80,paid_bus,KMB 58M,uni
tmtplaza,leung_king_estate_bus_terminus,30,paid_bus,KMB 58M,uni
leung_king_estate_bus_terminus,kwai_fong_station_bus_terminus,100,paid_bus,KMB 58M,uni
kwai_fong_station_bus_terminus,tin_shui_wai_town_centre_pti,110,paid_bus,KMB 69M
kwai_fong_station_bus_terminus,sha_tin_central_pti,45,paid_bus,KMB 47X,uni

// --- KWAI HING HUB ---
kwai_hing_concourse,kwai_hing_station_bus_terminus,2,internal,Exit B
kwai_hing_station_bus_terminus,sun_kwai_hing_plaza,3,escalator,Escalator
sun_kwai_hing_plaza,kwai_hing_government_offices,2,lift,internal lift lobby
sun_kwai_hing_plaza,kwai_chung_centre,2,bridge,bridge
sun_kwai_hing_plaza,mtc,3,bridge,bridge over Kwai Chung Road
kwai_chung_centre,mtc,3,bridge,bridge over Kwai Chung Road
sun_kwai_hing_plaza,sun_kwai_hing_gardens,3,bridge,bridge and lift
kwai_hing_concourse,life_kcc,2,bridge,Exit E
kwai_hing_concourse,kowloon_commerce_centre,3,bridge,Exit E
life_kcc,kowloon_commerce_centre,2,bridge,bridge
kwai_hing_station_bus_terminus,shek_lei_tai_loong_street_bus_terminus,23,paid_bus,KMB 43A,uni
cheung_hong_estate,kwai_hing_station_bus_terminus,30,paid_bus,KMB 43,uni
kwai_hing_station_bus_terminus,tsuen_wan_west_station_pti,40,paid_bus,KMB 43,uni

// --- KWAI CHUNG ESTATE ---
kwai_chung_estate,cheung_on_bus_terminus,48,paid_bus,KMB 44M
kwai_chung_estate,kwai_hing_station_bus_terminus,10,paid_bus,KMB 40X,uni
kwai_hing_station_bus_terminus,kwai_chung_estate,10,paid_bus,KMB 44M,uni
tsuen_wan_west_station_pti,kwai_chung_estate,33,paid_bus,KMB 43,uni
kwai_chung_estate,cheung_hong_estate,33,paid_bus,KMB 43,uni

// --- KWAI SHING ---
kwai_shing_central_bus_terminus,tsuen_wan_west_station_pti,65,paid_bus,KMB 34,uni
tsuen_wan_west_station_pti,kwai_shing_east_bus_terminus,67,paid_bus,KMB 34,uni
kwai_shing_east_bus_terminus,kwai_shing_central_bus_terminus,4,paid_bus,KMB 34,uni
kwai_shing_central_bus_terminus,olympic_pti,84,paid_bus,KMB 37,uni
olympic_pti,kwai_shing_east_bus_terminus,88,paid_bus,KMB 37,uni
kwai_shing_east_bus_terminus,kwai_shing_central_bus_terminus,4,paid_bus,KMB 37,uni
kwai_hing_station_bus_terminus,kwai_shing_east_bus_terminus,15,paid_bus,KMB 37M,uni
kwai_shing_east_bus_terminus,kwai_shing_central_bus_terminus,4,paid_bus,KMB 37M,uni
kwai_shing_central_bus_terminus,kwai_hing_station_bus_terminus,17,paid_bus,KMB 37M,uni
kwai_shing_east_bus_terminus,kwai_shing_central_bus_terminus,4,paid_bus,KMB 38,uni
kwai_shing_central_bus_terminus,lam_tin_station_bus_terminus,95,paid_bus,KMB 38,uni
lam_tin_station_bus_terminus,ping_tin_bus_terminus,20,paid_bus,KMB 38,uni
ping_tin_bus_terminus,kwai_shing_east_bus_terminus,118,paid_bus,KMB 38,uni
kwai_shing_east_bus_terminus,kwai_shing_east_shopping_centre,2,covered_walkway,covered walkway
kwai_shing_east_shopping_centre,kwai_shing_east_estate,2,lift,lifts and walkways
kwai_shing_east_bus_terminus,kwai_luen_estate,6,covered_walkway,covered walkway
kwai_shing_central_bus_terminus,kwai_shing_west_estate,2,covered_walkway,covered walkway
kwai_shing_east_bus_terminus,kwai_shing_central_bus_terminus,4,paid_bus,KMB 47X,uni
kwai_shing_central_bus_terminus,kwai_fong_station_bus_terminus,16,paid_bus,KMB 47X,uni
sha_tin_central_pti,kwai_shing_east_bus_terminus,64,paid_bus,KMB 47X,uni
kwai_shing_east_bus_terminus,kwai_shing_central_bus_terminus,4,paid_bus,KMB 47X,uni
kwai_shing_central_bus_terminus,kwai_shing_east_bus_terminus,10,paid_bus,KMB 47X,uni

// --- SHEK LEI HUB ---
shek_lei_tai_loong_street_bus_terminus,olympic_pti,60,paid_bus,KMB 31B/32,uni
olympic_pti,shek_lei_tai_loong_street_bus_terminus,60,paid_bus,KMB 31B,uni
shek_lei_tai_loong_street_bus_terminus,nina_tower_bus_terminus,50,paid_bus,KMB 40P,uni
shek_lei_tai_loong_street_bus_terminus,shek_lei_shopping_centre,2,escalator,escalators
shek_lei_shopping_centre,shek_lei_ii_estate,2,bridge,bridge
shek_lei_ii_estate,on_yam_estate,3,lift,bridge across Shek Pai Street and lift
shek_lei_shopping_centre,shek_lei_i_estate,2,bridge,bridge
shek_lei_i_estate,yi_fung_court,2,lift,bridge and lift

// --- TAI WO HAU HUB ---
tai_wo_hau_concourse,tai_wo_hau_sports_centre,2,bridge,bridge across Castle Peak Road - Kwai Chung
tai_wo_hau_sports_centre,kwai_yin_court,3,internal,walkway
tai_wo_hau_concourse,tai_wo_hau_estate,3,internal,bridge across Castle Peak Road - Kwai Chung
tai_wo_hau_estate,kwai_yung_court,3,internal,walkway
tai_wo_hau_sports_centre,tai_wo_hau_estate,1,internal,walkway
tai_wo_hau_estate,tai_wo_hau_shopping_centre,2,internal,walkway

// --- TSUEN WAN HUB (TWL) ---
tsuen_wan_concourse,nan_fung_centre,2,bridge,Exit A
nan_fung_centre,tsuen_wan_station_pti,2,internal,Stairs
tsuen_wan_concourse,tsuen_wan_public_library,2,bridge,Exit A3
tsuen_wan_concourse,tsuen_wan_station_bus_stop,2,internal,Exit A4
nan_fung_centre,tsuen_wan_public_library,2,bridge,bridge
nan_fung_centre,lik_sang_plaza,2,bridge,bridge over Castle Peak Road - Tsuen Wan
lik_sang_plaza,foo_yu_building,5,lift,resident lift lobby
tsuen_wan_public_library,tsuen_wan_government_offices,2,bridge,bridge
tsuen_wan_government_offices,cdw_building,8,bridge,bridge
tsuen_wan_government_offices,tsuen_kam_centre,4,bridge,bridge
tsuen_kam_centre,grand_city_plaza,2,bridge,bridge over Sai Lau Kok Road
tsuen_kam_centre,fuk_loi_estate,3,bridge,bridge over Castle Peak Road - Tsuen Wan
tsuen_wan_concourse,sai_lau_kok_garden,2,bridge,Exit B1
sai_lau_kok_garden,fou_wah_centre,2,covered_walkway,ground-level covered walkway (enter shops from Yoshinoya)
sai_lau_kok_garden,tw_carpark_building,2,bridge,bridge
sai_lau_kok_garden,victory_court,2,bridge,bridge over Castle Peak Road - Tsuen Wan and lift
victory_court,park_tsuen,2,covered_walkway,covered walkway
park_tsuen,sin_ching_building,2,covered_walkway,covered walkway
tsuen_wan_concourse,tw_carpark_building,2,bridge,Exit B2
tsuen_wan_concourse,luk_yeung_galleria,2,internal,Exit C
tsuen_wan_concourse,tai_ho_road_junction,3,bridge,Exit D
tsuen_wan_station_bus_stop,bayview_garden,20,paid_bus,KMB 34M
tsuen_wan_station_pti,riviera_gardens,27,paid_bus,KMB 238M

// --- TSUEN WAN HUB (TML / WEST) ---
tsuen_wan_west_concourse,tsuen_wan_west_station_pti,2,internal,Exit A1 or E1
tsuen_wan_west_concourse,op_mall,2,internal,Exit C2 (G/F) or C4 (1/F)
tsuen_wan_west_station_pti,op_mall,2,escalator,escalator
op_mall,ocean_pride,2,lift,resident lift lobby
tsuen_wan_west_concourse,nina_mall_2,3,escalator,Exit C3
tsuen_wan_west_concourse,hoi_kwai_road_pti,2,covered_walkway,Exit E2
tsuen_wan_west_station_pti,nina_mall_2,3,bridge,escalator and bridge
tsuen_wan_west_station_pti,bayview_garden,28,paid_bus,KMB 34
tsuen_wan_west_station_pti,lei_muk_shue_estate,56,paid_bus,KMB 36,uni
hoi_kwai_road_pti,riviera_gardens,20,paid_bus,Green Minibus 99
lei_muk_shue_estate,tsuen_wan_west_station_pti,38,paid_bus,KMB 36,uni

// --- TAI HO ROAD JUNCTION ---
tai_ho_road_junction,nan_fung_centre,2,bridge,bridge
tai_ho_road_junction,sai_lau_kok_garden,2,bridge,bridge
tai_ho_road_junction,citywalk_1,10,bridge,bridge over Tai Ho Road
tai_ho_road_junction,tsuen_wan_town_hall,12,bridge,bridge over Tai Ho Road

// --- NORTH & WEST EXTENSIONS (D-PARK CORRIDOR) ---
nan_fung_centre,tsuen_kam_centre,3,bridge,Footbridge
tsuen_wan_concourse,cdw_building,10,bridge,Exit A3
cdw_building,discovery_park,4,bridge,bridge
discovery_park,tkc_sports_centre,2,bridge,bridge
discovery_park,discovery_park_pti,2,escalator,escalator
tkc_sports_centre,discovery_park_pti,2,escalator,escalator

// --- EAST EXTENSIONS (SAI LAU KOK ROAD) ---
luk_yeung_galleria,tw_carpark_building,2,bridge,bridge over Sai Lau Kok Road
tw_carpark_building,tsuen_wan_east_junction,2,bridge,bridge
tsuen_wan_east_junction,kolour_tsuen_wan_2,3,bridge,bridge over Castle Peak Road - Tsuen Wan
kolour_tsuen_wan_1,kolour_tsuen_wan_2,2,bridge,bridge over Tsuen Wan Market Street
tsuen_wan_east_junction,tsuen_fung_centre,0,bridge,bridge
tsuen_fung_centre,waldorf_centre,2,bridge,bridge
waldorf_centre,tsuen_cheong_centre,2,bridge,bridge
tsuen_cheong_centre,ho_fai_commercial_centre_1,2,bridge,bridge
ho_fai_commercial_centre_1,ho_fai_commercial_centre_2,2,bridge,bridge
ho_fai_commercial_centre_1,panda_hotel,4,bridge,bridge
ho_fai_commercial_centre_2,panda_hotel,4,bridge,bridge
panda_hotel,panda_place,1,escalator,escalator

// --- SOUTH EXTENSIONS ---
citywalk_1,vision_city,2,lift,resident lift lobby
citywalk_1,nina_mall_1,2,bridge,follow signs for Citywalk 2,uni
nina_mall_1,citywalk_1,2,bridge,follow signs for Tsuen Wan Town Hall,uni
nina_mall_1,citywalk_2,2,bridge,follow signs for Citywalk 2,uni
citywalk_2,nina_mall_1,2,bridge,follow signs for Citywalk,uni
nina_mall_1,nina_tower,2,lift,office lift lobby
nina_mall_1,nina_hotel,2,lift,hotel lobby
nina_mall_1,nina_tower_bus_terminus,2,escalator,escalator
nina_tower,nina_tower_bus_terminus,2,covered_walkway,covered walkway
nina_mall_1,yurmsb,2,bridge,bridge
citywalk_2,yurmsb,2,bridge,bridge
citywalk_2,aurora,2,bridge,bridge
citywalk_2,the_dynasty,2,lift,resident lift lobby
aurora,plaza_88,1,bridge,bridge
plaza_88,chelsea_court,2,bridge,bridge over Ma Tau Pa Road
chelsea_court,h_cube,3,bridge,bridge
h_cube,indi_home,3,bridge,bridge
nina_mall_2,nina_mall_1,2,bridge,bridge over Tai Ho Road
nina_mall_2,op_mall,2,bridge,bridge under Tsuen Wan Road
nina_mall_2,parc_city,2,lift,resident lift lobby
nina_mall_2,skyline_plaza,2,bridge,bridge over Tai Ho Road
tsuen_wan_plaza,skyline_plaza,2,bridge,bridge over Hoi Shing Road and Yuen Tun Circuit
nina_mall_2,clague_garden_estate,3,bridge,bridge over Hoi Kwai Road
clague_garden_estate,tsuen_wan_plaza,2,bridge,bridge over Hoi Shing Road
tsuen_wan_plaza,tsuen_wan_town_hall,3,bridge,bridge
tsuen_wan_town_hall,citywalk_1,2,bridge,bridge
citywalk_1,tsuen_wan_plaza,4,bridge,follow signs for Town Hall,uni
tsuen_wan_plaza,citywalk_1,4,bridge,follow signs for Town Hall,uni

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
diamond_hill_platform_ktl,choi_hung_platform,3,paid_train,Kwun Tong Line (MTR)
choi_hung_platform,kowloon_bay_platform,3,paid_train,Kwun Tong Line (MTR)
kowloon_bay_platform,ngau_tau_kok_platform,3,paid_train,Kwun Tong Line (MTR)
ngau_tau_kok_platform,kwun_tong_platform,3,paid_train,Kwun Tong Line (MTR)
kwun_tong_platform,lam_tin_platform,3,paid_train,Kwun Tong Line (MTR)
lam_tin_platform,yau_tong_platform_ktl,4,paid_train,Kwun Tong Line (MTR)
yau_tong_platform_ktl,tiu_keng_leng_platform_ktl,4,paid_train,Kwun Tong Line (MTR)

// --- TRANSFERS (KTL <-> TKL) ---
yau_tong_platform_ktl,yau_tong_platform_tkl,3,paid_transfer,cross-platform transfer
tiu_keng_leng_platform_ktl,tiu_keng_leng_platform_tkl,2,paid_transfer,cross-platform transfer

// --- KWUN TONG LINE CONCOURSES ---
whampoa_platform,whampoa_concourse,2,fare_gate,fare gates
ho_man_tin_platform_ktl,ho_man_tin_concourse,5,fare_gate,fare gates
yaumatei_platform_ktl,yau_ma_tei_concourse,2,fare_gate,fare gates
mong_kok_platform_ktl,mong_kok_concourse,2,fare_gate,fare gates
prince_edward_platform_ktl,prince_edward_concourse,2,fare_gate,fare gates
skm_platform,skm_concourse,2,fare_gate,fare gates
lok_fu_platform,lok_fu_concourse,2,fare_gate,fare gates
wong_tai_sin_platform,wong_tai_sin_concourse,2,fare_gate,fare gates
diamond_hill_platform_ktl,diamond_hill_concourse_ktl,2,fare_gate,fare gates
choi_hung_platform,choi_hung_concourse,2,fare_gate,fare gates
kowloon_bay_platform,kowloon_bay_concourse,2,fare_gate,fare gates
ngau_tau_kok_platform,ngau_tau_kok_concourse,2,fare_gate,fare gates
kwun_tong_platform,kwun_tong_concourse,2,fare_gate,fare gates
lam_tin_platform,lam_tin_concourse,2,fare_gate,fare gates
yau_tong_platform_ktl,yau_tong_concourse,2,fare_gate,fare gates
tiu_keng_leng_platform_ktl,tiu_keng_leng_concourse,2,fare_gate,fare gates

// --- WHAMPOA ---
whampoa_concourse,fashion_world,2,internal,Exit C1
whampoa_concourse,aeon_style_whampoa,2,internal,Exit D1

// --- HO MAN TIN ---
ho_man_tin_concourse,onmantin,2,internal,Exit A4
ho_man_tin_concourse,in_one,2,internal,Exit C

// --- SHEK KIP MEI ---
shek_kip_mei_concourse,shek_kip_mei_estate_phase_1,2,covered_walkway,Exit C
shek_kip_mei_concourse,shek_kip_mei_estate_phases_256,2,covered_walkway,Exit A

// --- KOWLOON TONG HUB ---
kowloon_tong_platform_ktl,kowloon_tong_platform_erl,9,paid_transfer,pedestrian subway (paid area)
kowloon_tong_concourse_ktl,kowloon_tong_concourse_erl,10,internal,pedestrian subway (free area)
kowloon_tong_platform_ktl,kowloon_tong_concourse_ktl,2,fare_gate,fare gates
kowloon_tong_platform_erl,kowloon_tong_concourse_erl,2,fare_gate,fare gates
kowloon_tong_concourse_ktl,festival_walk,6,internal,Exit C2
kowloon_tong_concourse_ktl,kltesc,2,internal,Exit E
kowloon_tong_concourse_erl,festival_walk,6,internal,Exit H
festival_walk,cityu,2,tunnel,tunnel

// --- LOK FU HUB ---
lok_fu_concourse,lok_fu_place_zone_a,2,internal,Exit A
lok_fu_concourse,lok_fu_place_zone_b,2,internal,Exit B
lok_fu_concourse,lok_fu_bus_terminus,2,internal,Exit A and bridge over Wang Tau Hom South Road
lok_fu_concourse,foodplus,2,internal,Exit A and bridge over Wang Tau Hom East Road

// --- LOK FU PLACE ZONE A CONNECTIONS ---
lok_fu_place_zone_a,lok_fu_bus_terminus,2,bridge,bridge
lok_fu_place_zone_a,foodplus,2,bridge,bridge over Wang Tau Hom East Road
lok_fu_bus_terminus,foodplus,2,bridge,bridge
lok_fu_place_zone_a,wang_tau_hom_estate,5,bridge,bridge over Wang Tau Hom Central Road
wang_tau_hom_estate,tin_ma_court,5,bridge,bridge over Lung Cheung Road
tin_ma_court,tin_wang_court,2,bridge,bridge
lok_fu_place_zone_a,housing_authority_csc,2,bridge,bridge
housing_authority_csc,fu_keung_court,3,bridge,bridge over Fu Keung Street
housing_authority_csc,tak_keung_court,2,lift,resident lift lobby

// --- LOK FU PLACE ZONE B CONNECTIONS ---
lok_fu_place_zone_a,lok_fu_place_zone_b,2,internal,internal mall connection
lok_fu_place_zone_b,lok_fu_estate_south,2,tunnel,tunnel

// --- WONG TAI SIN HUB ---
wong_tai_sin_concourse,temple_mall_north,2,internal,Exit B3
temple_mall_north,upper_wong_tai_sin_estate,2,covered_walkway,covered walkway
wong_tai_sin_concourse,temple_mall_south,2,internal,Exit D3
temple_mall_south,lower_wong_tai_sin_estate,2,covered_walkway,covered walkway (some blocks only)
temple_mall_south,wong_tai_sin_bus_terminus,2,bridge,bridge
temple_mall_north,temple_mall_south,2,bridge,bridge

// --- DIAMOND HILL HUB ---
diamond_hill_concourse,plaza_hollywood,2,escalator,Exit C2
plaza_hollywood,galaxia,2,lift,resident lift lobby
plaza_hollywood,fung_tak_estate,8,bridge,bridge over Lung Poon Street and Fung Tak Road
fung_tak_estate,fung_lai_court,2,covered_walkway,covered walkway
fung_tak_estate,tsz_lok_estate_phase_3,8,lift,lifts and bridge over Po Kong Village Road
tsz_lok_estate_phase_3,tsz_wan_shan_shopping_centre,2,lift,lifts and bridge over Yuk Wah Street
tsz_wan_shan_shopping_centre,tsz_hong_estate,2,bridge,bridge
tsz_wan_shan_shopping_centre,tsz_on_court,2,covered_walkway,covered walkway
tsz_on_court,tsz_man_estate,2,covered_walkway,covered walkway
tsz_man_estate,tsz_ching_estate,2,bridge,bridge over Tsz Wan Shan Road
tsz_hong_estate,tsz_man_estate,2,covered_walkway,covered walkway
tsz_lok_estate_phase_3,tsz_lok_estate_phase_2,2,bridge,bridge over Yuk Wah Street
tsz_lok_estate_phase_2,tsz_lok_estate_phase_1,2,bridge,bridge over Sheung Fung Street
tsz_lok_estate_phase_1,tsz_oi_court_stage_1_2,2,bridge,bridge
tsz_oi_court_stage_1_2,tsz_oi_court_stage_3,2,bridge,bridge over Tsz Wan Shan Road
tsz_oi_court_stage_1_2,tsz_ching_estate,2,bridge,bridge over Tsz Wan Shan Road
tsz_oi_court_stage_3,tsz_ching_estate,2,bridge,bridge over Fung Wah Street
tsz_wan_shan_shopping_centre,tsz_lok_estate_phase_2,2,covered_walkway,covered walkway
tsz_wan_shan_shopping_centre,tsz_lok_estate_phase_1,2,bridge,bridge over Wan Wah Street
diamond_hill_concourse,kai_chuen_court,2,internal,Exit A2

// --- CHOI HUNG HUB ---
choi_hung_concourse,choi_hung_estate,2,internal,Exit C4
choi_hung_concourse,ngau_chi_wan_market,2,internal,Exit B
choi_hung_concourse,infinity_8,2,internal,Exit A3
infinity_8,8_clear_water_bay_road,2,lift,resident lift lobby
infinity_8,ping_shek_pti,2,escalator,escalator
ngau_chi_wan_market,ngau_chi_wan_civic_centre,2,lift,lift lobby
ngau_chi_wan_market,ping_shek_estate,4,bridge,bridge over Clear Water Bay Road
choi_hung_concourse,ping_shek_estate,2,internal,Exit A2
ping_shek_pti,ping_shek_estate,2,covered_walkway,covered walkway
infinity_8,ping_shek_estate,2,bridge,bridge

// --- KOWLOON BAY HUB ---
kowloon_bay_concourse,telford_plaza,2,internal,Exits A or C
telford_plaza,megabox,15,free_shuttle,free shuttle
kowloon_bay_concourse,east_kowloon_cultural_centre,4,internal,Exit B
east_kowloon_cultural_centre,amoy_plaza,5,bridge,bridge over Ngau Tau Kok Road
kowloon_bay_concourse,choi_ying_estate,8,bridge,Exit B and bridge

// --- KWUN TONG HUB ---
kwun_tong_concourse,apm,2,internal,Exit A2
kwun_tong_concourse,kwun_tong_plaza,2,internal,Exit B2

// --- SAU MAU PING ---
lam_tin_pti,po_tat_estate,15,paid_bus,Green Minibus 71A
lam_tin_pti,sau_mau_ping_estate,16,paid_bus,Green Minibus 71B
po_tat_estate,sau_mau_ping_south_estate,4,bridge,bridge over Sau Mau Ping Road
po_tat_estate,sau_mau_ping_estate,2,bridge,bridge over Sau Mau Ping Road
sau_mau_ping_estate,sau_mau_ping_south_estate,4,covered_walkway,covered walkway
sau_mau_ping_estate,sau_mau_ping_shopping_centre,2,covered_walkway,covered walkway
sau_mau_ping_shopping_centre,hiu_lai_court,2,bridge,bridge

// --- SHUN LEE ---
shun_lee_estate,ping_shek_pti,15,paid_bus,KMB 29M,uni
ping_shek_pti,shun_lee_estate,50,paid_bus,KMB 29M,uni
shun_lee_estate,shun_chi_court,2,bridge,bridge over Lee On Road
shun_lee_estate,shun_on_estate,6,bridge,bridge
shun_on_estate,shun_tin_estate,6,bridge,bridge

// --- LAM TIN HUB ---
lam_tin_concourse,sceneway_plaza,2,internal,Exit B
lam_tin_concourse,laguna_city,6,covered_walkway,Exit D1
lam_tin_concourse,sceneway_garden,3,covered_walkway,Exit D2
sceneway_plaza,sceneway_garden,2,lift,resident lift lobby
lam_tin_concourse,lam_tin_pti,2,internal,Exit B
lam_tin_concourse,kai_tin_shopping_centre,6,escalator,Exit A and bridge
sceneway_plaza,kai_tin_shopping_centre,5,escalator,Exit A and bridge
sceneway_plaza,lam_tin_pti,2,internal,internal mall connection
kai_tin_shopping_centre,kai_tin_estate,2,covered_walkway,covered walkway
kai_tin_estate,hong_yat_court,2,bridge,bridge over Tak Tin Street
kai_tin_shopping_centre,lam_tin_estate,4,covered_walkway,bridge over Tak Tin Street and covered walkway
kai_tin_shopping_centre,on_tin_estate,2,lift,resident lift lobby
kai_tin_shopping_centre,ping_tin_estate,2,covered_walkway,covered walkway
ping_tin_estate,ping_tin_shopping_centre,2,covered_walkway,covered walkway
ping_tin_shopping_centre,hong_nga_court,2,bridge,bridge
hong_nga_court,tak_tin_estate,2,covered_walkway,covered walkway
hong_nga_court,kwong_tin_estate,2,covered_walkway,covered walkway
kwong_tin_estate,hong_pak_court,2,bridge,bridge or underpass

// --- YAU TONG HUB ---
yau_tong_concourse,yau_lai_shopping_centre,2,covered_walkway,Exit B1
yau_lai_shopping_centre,yau_lai_estate,2,covered_walkway,covered walkway
yau_lai_estate,yau_tong_estate_north,3,bridge,bridge over Yau Tong Lane
yau_tong_estate_north,yau_chui_court,3,covered_walkway,covered walkway
yau_tong_estate_north,yau_tong_estate_south,4,covered_walkway,covered walkway
yau_tong_concourse,yau_tong_estate_south,3,escalator,Exit A1
yau_tong_estate_south,lei_yue_mun_plaza,2,bridge,bridge
lei_yue_mun_plaza,yau_mei_court,2,lift,resident lift lobby
yau_tong_concourse,domain_mall,2,internal,Exit A1
domain_mall,yau_tong_estate_south,2,covered_walkway,covered walkway
domain_mall,lei_yue_mun_plaza,2,bridge,bridge
lei_yue_mun_plaza,ko_cheung_court,2,bridge,bridge over Lei Yue Mun Road
ko_cheung_court,ko_yee_estate,2,lift,covered walkway and lift
ko_yee_estate,ko_chun_court,3,lift,bridge over Ko Chiu Road and lift
lei_yue_mun_plaza,lei_yue_mun_estate,3,bridge,bridge over Ko Chiu Road
lei_yue_mun_plaza,ko_wang_court,2,lift,covered walkway and lift

// --- TIU KENG LENG HUB ---
tiu_keng_leng_concourse,metro_town,2,internal,Exit B
metro_town,ocean_shores,2,bridge,bridge over Chui Ling Road
metro_town,choi_ming_shopping_centre,3,bridge,bridge over Choi Ming Street
choi_ming_shopping_centre,kin_ming_estate,2,covered_walkway,covered walkway
choi_ming_shopping_centre,choi_ming_court,2,covered_walkway,covered walkway
metro_town,hong_kong_design_institute,2,bridge,bridge over King Ling Road
hong_kong_design_institute,ive_lee_wai_lee,2,bridge,bridge
ive_lee_wai_lee,tiu_keng_leng_sports_centre,2,bridge,bridge
tiu_keng_leng_sports_centre,tiu_keng_leng_public_library,1,internal,internal walkway
metro_town,shin_ming_estate,3,covered_walkway,covered walkway

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
north_point_platform_isl,north_point_platform_tkl,2,paid_transfer,cross-platform transfer
quarry_bay_platform_isl,quarry_bay_platform_tkl,8,paid_transfer,vertical escalator transfer

// --- WESTERN DISTRICT ---
sai_ying_pun_platform,syp_concourse,4,fare_gate,fare gates
syp_concourse,eco_tree_hotel,2,internal,Exit A2 to Eco Tree Hotel
hku_platform,hku_concourse,4,fare_gate,fare gates
hku_concourse,hku_campus,4,lift,Exit A2 lifts to HKU Main Campus
hku_concourse,hku_campus_c,4,lift,Exit C1 lifts to HKU Centennial Campus
hku_campus,hku_campus_c,4,internal,HKU internal walkway
kennedy_town_station_minibus_terminus,kennedy_town_concourse,2,escalator,Exit A escalators or lifts

// --- CENTRAL & ADMIRALTY ---
shun_tak_centre,west_spine_west,4,bridge,bridge along Connaught Road Central
infinitus_plaza,west_spine_west,2,bridge,bridge over Connaught Road Central
rumsey_carpark,west_spine_west,2,bridge,bridge along Connaught Road Central
harbour_bldg,west_spine_central,2,bridge,bridge along Connaught Road Central
two_chinachem,west_spine_east,2,bridge,bridge along Connaught Road Central
one_ifc,west_spine_east,6,bridge,bridge along Connaught Road Central
west_spine_west,west_spine_central,6,bridge,bridge along Connaught Road Central
west_spine_central,west_spine_east,4,bridge,bridge along Connaught Road Central
one_ifc,ifc_mall,4,internal,Internal IFC Connection
two_ifc,ifc_mall,4,internal,Internal IFC Connection
one_ifc,3_exchange_square,2,bridge,bridge
hang_seng_hq,one_ifc,4,bridge,bridge over Connaught Road Central
hang_seng_hq,3_exchange_square,4,bridge,bridge over Connaught Road Central
3_exchange_square,1&2_exchange_square,6,bridge,bridge
central_bus_terminus,1&2_exchange_square,2,escalator,escalator
central_bus_terminus,3_exchange_square,2,escalator,escalator
ifc_mall,1&2_exchange_square,4,bridge,bridge
yue_thai_bldg,sheung_wan_concourse_mid,4,internal,Sheung Wan Exit C
kam_sang_bldg,sheung_wan_concourse_mid,4,internal,Sheung Wan Exit B
tung_hip_bldg,sheung_wan_concourse_mid,4,internal,Sheung Wan Exit A1
shun_tak_centre,sheung_wan_concourse_mid,6,internal,Sheung Wan Exit D
infinitus_plaza,sheung_wan_concourse_east,4,internal,Sheung Wan Exit E5
golden_centre,sheung_wan_concourse_east,4,internal,Sheung Wan Exit E1
ifc_mall,central_pier_3,6,bridge,bridge
central_yards,central_pier_7,6,bridge,bridge
central_pier_3,central_pier_7,6,covered_walkway,covered walkway
spine_north,central_yards,1,bridge,bridge
spine_north,ifc_mall,1,bridge,bridge
spine_north,spine_mid,3,bridge,bridge
spine_mid,gpo,1,bridge,bridge
spine_mid,1&2_exchange_square,1,bridge,bridge
spine_mid,jardine_house,1,bridge,bridge
spine_mid,spine_south,5,bridge,bridge over Connaught Road Central
spine_south,world_wide_house,5,bridge,bridge
world_wide_house,1&2_exchange_square,6,bridge,bridge over Connaught Road Central
spine_south,chater_house,0,bridge,bridge
chater_house,alexandra_house,2,bridge,bridge over Chater Road
hang_seng_hq,central_market,2,bridge,bridge over Des Voeux Road Central
central_market,100qrc,4,bridge,bridge over Queen's Road Central
central_market,mid_levels_escalator,4,bridge,bridge over Queen's Road Central
100qrc,mid_levels_escalator,2,bridge,bridge
hang_seng_hq,nexxus_bldg,2,bridge,bridge over Queen Victoria Street
landmark_gloucester,alexandra_house,2,bridge,bridge over Des Voeux Road Central
landmark_mall,alexandra_house,2,bridge,bridge over Des Voeux Road Central
landmark_mall,bea_bldg,2,internal,internal Landmark connection
landmark_mall,central_bldg,2,internal,internal Landmark connection
central_bldg,central_tower,2,bridge,bridge over Queen's Road Central
central_tower,entertainment_bldg,2,bridge,bridge over Wyndham Street
landmark_mall,9qrc,6,bridge,bridge over Ice House Street
landmark_gloucester,landmark_mall,2,lift,office lift lobby
landmark_edinburgh,landmark_mall,2,lift,office lift lobby
landmark_york,landmark_mall,2,lift,office lift lobby
alexandra_house,princes_bldg,2,bridge,bridge over Ice House Street
princes_bldg,mandarin_oriental,2,bridge,bridge over Chater Road
princes_bldg,9qrc,4,bridge,bridge over Des Voeux Road Central
princes_bldg,scb_bldg,4,bridge,bridge over Des Voeux Road Central
9qrc,scb_bldg,2,bridge,Short Bridge
scb_bldg,hsbc_bldg,2,bridge,Short Bridge
chater_garden,aia_central,6,bridge,bridge over Chater Road
chater_garden,the_henderson,6,bridge,bridge over Murray Road
the_henderson,aia_central,4,bridge,bridge over Cotton Tree Drive
the_henderson,cheung_kong_centre,6,bridge,bridge over Queen's Road Central
cheung_kong_centre,three_garden_road,4,bridge,bridge over Garden Road
three_garden_road,the_murray,2,bridge,bridge
the_henderson,central_east_node,2,bridge,bridge
bank_of_america,central_east_node,2,bridge,bridge over Lambeth Walk
fairmont_house,central_east_node,2,bridge,bridge
queensway_plaza,central_east_node,6,bridge,bridge over Cotton Tree Drive
queensway_plaza,admiralty_centre,2,bridge,bridge
queensway_plaza,far_east_finance,2,bridge,bridge
queensway_plaza,united_centre,2,internal,internal mall walkway
queensway_plaza,lippo_centre,2,bridge,bridge
admiralty_centre,central_gov_offices,6,bridge,bridge over Harcourt Road
citic_tower,admiralty_exit_e2,6,bridge,bridge over Harcourt Road
citic_tower,central_gov_offices,6,bridge,bridge over Tim Mei Avenue
admiralty_east_bus_terminus,admiralty_concourse,2,Admiralty Exit D
united_centre,admiralty_exit_e2,6,bridge,bridge to MTR
high_court,lippo_centre,6,bridge,bridge over Queensway
high_court,queensway_gov_offices,2,bridge,short bridge
one_ifc,hong_kong_concourse,4,escalator,Hong Kong Exit E
two_ifc,hong_kong_concourse,4,escalator,Hong Kong Exit A
ifc_mall,hong_kong_concourse,4,escalator,Hong Kong Exits A/E/F
world_wide_house,central_concourse_west,5,escalator,Central Exits A/B
central_concourse_west,wheelock_house,4,internal,Exit C via Citibank (🕒 Mon-Fri 09:30-17:00)
chater_house,central_concourse_mid,4,staircase,Central Exit E
alexandra_house,central_concourse_mid,4,internal,Central Exit H
landmark_mall,central_concourse_mid,4,internal,Central Exit G
chater_garden,central_concourse_east,4,internal,Central Exit J2
ccb_tower,central_concourse_east,4,escalator,Central Exit L
queensway_plaza,admiralty_concourse,2,internal,Admiralty Exits B/C
admiralty_centre,admiralty_concourse,2,internal,Admiralty Exit A
admiralty_exit_e2,admiralty_concourse,6,escalator,Admiralty Exit E2 escalator
central_concourse_west,central_concourse_mid,4,tunnel,Central MTR unpaid link
central_concourse_mid,central_concourse_east,4,tunnel,Central MTR unpaid link
pacific_place_lg1,pacific_place_l2,8,escalator,internal escalators
pacific_place_lg1,admiralty_concourse,4,tunnel,Admiralty Exit F
pacific_place_lg1,three_pacific_place,4,tunnel,tunnel
pacific_place_l2,queensway_gov_offices,2,bridge,short bridge
pacific_place_l2,united_centre,6,bridge,bridge over Queensway
pacific_place_l2,queensway_plaza,4,bridge,bridge over Queensway
pacific_place_l2,admiralty_exit_e2,6,bridge,bridge connection to Admiralty Exit E2

// --- CENTRAL TO HONG KONG PAID TUNNEL ---
central_platform_isl,hong_kong_platform,8,paid_tunnel,paid tunnel with moving walkways
hong_kong_platform,hong_kong_concourse,2,fare_gate,fare gates to HK Station Exits

// --- SHEUNG WAN TO ADMIRALTY MTR PLATFORMS & FARE GATES ---
sheung_wan_platform,sheung_wan_concourse_mid,2,fare_gate,fare gates to Exits A-D
sheung_wan_platform,sheung_wan_concourse_east,4,fare_gate,fare gates to Exit E
central_platform_isl,central_concourse_west,5,fare_gate,fare gates to Exits A-D
central_platform_isl,central_concourse_mid,5,fare_gate,fare gates to Exits E-H
central_platform_isl,central_concourse_east,6,fare_gate,fare gates to Exits J-L
central_platform_twl,central_concourse_west,6,fare_gate,fare gates to Exits A-D
central_platform_twl,central_concourse_mid,6,fare_gate,fare gates to Exits E-H
central_platform_twl,central_concourse_east,5,fare_gate,fare gates to Exits J-L
admiralty_platform_isl,admiralty_concourse,2,fare_gate,fare gates to/from Island Line platforms
admiralty_platform_twl,admiralty_concourse,2,fare_gate,fare gates to/from Tsuen Wan Line platforms
admiralty_platform_erl,admiralty_concourse,4,fare_gate,fare gates to/from East Rail and South Island Line platforms

// --- WAN CHAI HUB ---
wan_chai_platform,wan_chai_concourse,2,fare_gate,fare gates
wan_chai_concourse,china_overseas_bldg,2,internal,Exit C
wan_chai_concourse,immigration_tower,6,bridge,Exit A5 Footbridge
immigration_tower,central_plaza,2,bridge,bridge to Central Plaza
immigration_tower,revenue_tower,2,escalator,covered walkway
central_plaza,hkcec,2,bridge,bridge to HKCEC
hkcec,great_eagle_ctr,4,bridge,bridge over Fleming Road
great_eagle_ctr,harbour_ctr,2,internal,Podium
great_eagle_ctr,st_regis,4,bridge,bridge over Fleming Road
harbour_ctr,wcn_junction,1,bridge,bridge
wcsp,wcn_junction,1,bridge,bridge
causeway_ctr,wcn_junction,3,bridge,bridge
causeway_ctr,shk_ctr,4,escalator,covered walkway across Harbour Drive
shk_ctr,capital_ctr,6,bridge,bridge over Gloucester Road
central_plaza,st_regis,8,bridge,bridge over Harbour Road
st_regis,cr_bldg,2,internal,Podium
cr_bldg,causeway_ctr,4,internal,Podium
wan_chai_concourse,southorn_stadium,4,internal,Exit B2 to Southorn Stadium
wan_chai_concourse,lee_tung_avenue,4,tunnel,Exit D to Lee Tung Avenue

// --- CAUSEWAY BAY HUB ---
causeway_bay_platform,causeway_bay_concourse_a,2,fare_gate,fare gates to Exit A (Times Square)
causeway_bay_platform,causeway_bay_concourse_b_c,2,fare_gate,fare gates to Exits B-C
causeway_bay_platform,causeway_bay_concourse_d_f,2,fare_gate,fare gates to Exits D-F
causeway_bay_concourse_a,times_square,2,internal,Exit A to Times Square
causeway_bay_concourse_b_c,cwb_plaza,2,internal,Exit B to Causeway Bay Plaza 1
causeway_bay_concourse_d_f,hysan_place,2,internal,Exit F2 to Hysan Place
causeway_bay_concourse_d_f,the_goldmark,2,internal,Exit F1 to The Goldmark
causeway_bay_concourse_d_f,sogo_cwb,2,internal,Exits D3 or D4 to SOGO Basement
causeway_bay_concourse_d_f,macau_yat_yuen_centre,2,staircase,Exit D2
macau_yat_yuen_centre,sogo_cwb,2,covered_walkway,covered walkway on Hennessy Road
causeway_bay_concourse_d_f,east_point_centre,2,staircase,Exit D2
sogo_cwb,east_point_centre,2,lift,office lift lobby
east_point_centre,macau_yat_yuen_centre,2,covered_walkway,covered walkway on Hennessy Road

// --- FORTRESS HILL HUB ---
fortress_hill_platform,fortress_hill_concourse,2,fare_gate,fare gates
fortress_hill_concourse,fortress_metro_tower,2,escalator,Exit B to Fortress Metro Tower
fortress_metro_tower,fortress_hill_t_junction,4,bridge,bridge
electric_road_msb,fortress_hill_t_junction,2,bridge,bridge
harbour_glory,fortress_hill_t_junction,6,bridge,bridge

// --- NORTH POINT HUB ---
north_point_platform_isl,north_point_concourse,2,fare_gate,fare gates
north_point_concourse,odeon_building,2,internal,Exits A1-A3 to Odeon Building
north_point_concourse,china_united_centre,2,internal,Exit A4 to China United Centre
north_point_concourse,roca_centre,2,internal,Exit B to Roca Centre

// --- TAI KOO HUB ---
tai_koo_platform,tai_koo_concourse,2,fare_gate,fare gates
tai_koo_concourse,cityplaza_gf,4,internal,Exit D2 to Cityplaza G/F
tai_koo_concourse,cityplaza_2f,4,internal,Exit E1 to Cityplaza 2/F
cityplaza_gf,cityplaza_1f,3,escalator,internal escalators
cityplaza_1f,cityplaza_2f,2,escalator,internal escalators
cityplaza_gf,horizon_gardens,2,covered_walkway,covered walkway
cityplaza_1f,kam_din_terrace,2,bridge,bridge over Tai Mou Avenue
cityplaza_1f,sing_fai_terrace,2,bridge,bridge over Tai Fung Avenue
cityplaza_2f,east_hk,2,bridge,bridge
cityplaza_2f,kao_shan_terrace,2,bridge,bridge over Tai Fung Avenue
cityplaza_2f,12_taikoo,2,bridge,bridge over Taikoo Wan Road
cityplaza_2f,14_taikoo,2,bridge,bridge over Taikoo Wan Road
cityplaza_2f,1111_kings,6,escalator,internal escalators
tai_koo_concourse,kornhill_plaza_n,4,internal,Exit A2 to Kornhill Plaza (North)
tai_koo_concourse,kornhill_plaza_s,4,internal,Exit C to Kornhill Plaza (South)
kornhill_plaza_n,kornhill_plaza_s,2,bridge,bridge over Kornhill Road
kornhill_plaza_s,kornhill_a-h,8,escalator,escalator and bridge
kornhill_plaza_s,kornhill_j-m,6,escalator,escalator and bridge
kornhill_a-h,kornhill_j-m,4,staircase,staircase

// --- SAI WAN HO HUB ---
sai_wan_ho_platform,sai_wan_ho_concourse,2,fare_gate,fare gates
sai_wan_ho_concourse,felicity_garden,2,internal,Exit A to Felicity Garden

// --- HENG FA CHUEN HUB ---
heng_fa_chuen_platform,heng_fa_chuen_concourse,2,fare_gate,fare gates
heng_fa_chuen_concourse,paradise_mall,2,internal,Exit A

// --- CHAI WAN HUB ---
chai_wan_platform,chai_wan_concourse,2,fare_gate,fare gates
chai_wan_concourse,new_jade_garden,2,internal,Exit A to New Jade Garden
hing_wah_1_estate,new_jade_garden,4,bridge,bridge
new_jade_garden,chai_wan_y_junction,2,bridge,bridge
wan_tsui_estate,chai_wan_y_junction,4,bridge,bridge
youth_square,chai_wan_y_junction,2,bridge,bridge

// --- REMAINING ISLAND LINE CONCOURSES ---
kennedy_town_platform,kennedy_town_concourse,2,fare_gate,fare gates
tin_hau_platform,tin_hau_concourse,2,fare_gate,fare gates
quarry_bay_platform_isl,quarry_bay_concourse,2,fare_gate,fare gates
shau_kei_wan_platform,shau_kei_wan_concourse,2,fare_gate,fare gates

// --- TUNG CHUNG LINE (TRAIN TRACKS) ---
hong_kong_platform,kowloon_platform,8,paid_train,Tung Chung Line (MTR)
kowloon_platform,olympic_platform,5,paid_train,Tung Chung Line (MTR)
olympic_platform,nam_cheong_platform_tcl,5,paid_train,Tung Chung Line (MTR)
nam_cheong_platform_tcl,lai_king_platform_tcl_nb,10,paid_train,Tung Chung Line (MTR),uni
lai_king_platform_tcl_nb,tsing_yi_platform_tcl,8,paid_train,Tung Chung Line (MTR),uni
tsing_yi_platform_tcl,lai_king_platform_tcl_sb,8,paid_train,Tung Chung Line (MTR),uni
lai_king_platform_tcl_sb,nam_cheong_platform_tcl,10,paid_train,Tung Chung Line (MTR),uni
tsing_yi_platform_tcl,sunny_bay_platform,14,paid_train,Tung Chung Line (MTR)
sunny_bay_platform,tung_chung_platform,18,paid_train,Tung Chung Line (MTR)

// --- TUNG CHUNG LINE CONCOURSES ---
kowloon_platform,kowloon_concourse,2,fare_gate,fare gates
olympic_platform,olympic_concourse,2,fare_gate,fare gates
nam_cheong_platform_tcl,nam_cheong_concourse,2,fare_gate,fare gates
lai_king_concourse,lai_king_platform_tcl_nb,5,fare_gate,fare gates
lai_king_concourse,lai_king_platform_tcl_sb,5,fare_gate,fare gates
tsing_yi_platform_tcl,tsing_yi_concourse,2,fare_gate,fare gates
sunny_bay_platform,sunny_bay_concourse,2,fare_gate,fare gates
tung_chung_platform,tung_chung_concourse,2,fare_gate,fare gates

// --- KOWLOON / AUSTIN HUB ---
kowloon_concourse,elements_mall,2,internal,internal mall connection
elements_mall,austin_concourse,15,bridge,Exit B5
elements_mall,west_kowloon_station,15,bridge,Exit M
elements_mall,icc,2,lift,office lift lobby
elements_mall,ritz_carlton,2,lift,hotel lobby
elements_mall,the_arch,4,lift,resident lift lobby
elements_mall,sorrento,4,lift,resident lift lobby
elements_mall,the_waterfront,4,lift,resident lift lobby
elements_mall,the_harbourside,4,lift,resident lift lobby
elements_mall,the_cullinan,4,lift,resident lift lobby
austin_concourse,west_kowloon_station,2,internal,Exit C to Hong Kong West Kowloon Station,uni
west_kowloon_station,austin_concourse,2,internal,Exit A to Austin Station,uni
west_kowloon_station,igc,2,internal,Exit L
austin_concourse,the_austin,2,internal,Exit B3
austin_concourse,grand_austin,2,internal,Exit D3

// --- OLYMPIC HUB ---
olympic_concourse,olympian_city_one,3,bridge,Exits A2 or E
olympian_city_one,island_harbourview,2,bridge,bridge
olympian_city_one,bank_of_china_centre,2,internal,internal mall connection
olympic_concourse,hsbc_centre,3,bridge,Exits B or C
hsbc_centre,olympic_pti,2,escalator,escalator
hsbc_centre,harbour_green,4,bridge,bridge
olympian_city_one,harbour_green,5,bridge,bridge
olympic_concourse,west9zone,3,bridge,Exit C5
west9zone,florient_rise,2,lift,resident lift lobby
olympic_concourse,olympian_city_two,2,internal,Exit D3
olympian_city_two,olympian_city_three,2,bridge,bridge
olympian_city_three,the_hermitage,2,lift,resident lift lobby
olympian_city_two,central_park,2,lift,resident lift lobby
olympian_city_two,hoi_fu_shopping_centre,4,bridge,bridge
hoi_fu_shopping_centre,hoi_fu_court,4,covered_walkway,covered walkway
olympian_city_two,park_avenue,3,lift,resident lift lobby
central_park,park_avenue,2,covered_walkway,covered walkway

// --- NAM CHEONG HUB ---
nam_cheong_concourse,v_walk,2,internal,Exits A2 or D2
v_walk,fu_cheong_estate,2,bridge,bridge
v_walk,cullinan_west,2,lift,resident lift lobby
v_walk,hoi_tat_estate,6,bridge,bridge
hoi_tat_estate,sham_shui_po_lcst_building,2,internal,podium
sham_shui_po_lcst_building,hoi_ying_estate,3,bridge,bridge
sham_shui_po_lcst_building,aqua_marine,3,bridge,bridge through Aeon (🕒 08:30 - 22:30)

// --- TSING YI HUB ---
tsing_yi_concourse,maritime_square_1,2,internal,Exits A2/B (both 1/F) / F (3/F) / G (2/F)
maritime_square_1,tierra_verde,2,lift,resident lift lobby
maritime_square_1,villa_esplanada,4,bridge,bridges
tsing_yi_concourse,maritime_square_2,2,bridge,Exit A1
maritime_square_1,maritime_square_2,2,bridge,bridge
maritime_square_2,cheung_on_estate,4,bridge,bridge
cheung_on_estate,cheung_fat_estate,5,bridge,bridge
cheung_on_estate,cheung_on_bus_terminus,5,bridge,bridge
cheung_on_bus_terminus,cheung_fat_estate,3,covered_walkway,covered walkway
cheung_on_bus_terminus,tsuen_wan_station_pti,25,paid_bus,KMB 41M
cheung_on_bus_terminus,discovery_park_pti,30,paid_bus,KMB 42M/243M
cheung_on_bus_terminus,tsuen_wan_west_station_pti,25,paid_bus,KMB 43B
cheung_on_bus_terminus,sha_tin_central_pti,65,paid_bus,KMB 49X
cheung_fat_estate,cheung_fat_plaza,2,covered_walkway,covered walkway
cheung_fat_plaza,cheung_on_bus_terminus,2,covered_walkway,covered walkway
cheung_fat_estate,ching_tai_court,4,covered_walkway,covered walkway
tsing_yi_concourse,tivoli_garden,9,covered_walkway,Exit B and covered walkway
maritime_square_1,tivoli_garden,8,covered_walkway,covered walkway
tivoli_garden,serene_garden,4,bridge,bridge
serene_garden,greenfield_garden,5,bridge,bridge
tivoli_garden,tsing_yi_municipal_services_building,3,bridge,bridge
serene_garden,tsing_yi_municipal_services_building,3,bridge,bridge
tsing_yi_municipal_services_building,tsing_yi_garden,3,bridge,bridge
tsing_yi_garden,tsing_yi_estate,4,covered_walkway,covered walkway to Tsing Yi Estate
tsing_yi_estate,cheung_on_bus_terminus,20,paid_bus,KMB 41M/44,uni
tsing_yi_estate,tsuen_wan_station_pti,35,paid_bus,KMB 41M
cheung_on_bus_terminus,tsing_yi_estate,20,paid_bus,KMB 44,uni
tsing_yi_concourse,tsing_yi_exit_c,2,internal,Exit C
maritime_square_2,tsing_yi_pti,1,internal,internal mall walkway
tsing_yi_exit_c,park_island,30,residents_bus,NR330 Residents' Bus
cheung_hong_estate,cheung_on_bus_terminus,24,paid_bus,KMB 43B/243M,uni

// --- TUNG CHUNG HUB ---
tung_chung_concourse,fu_tung_plaza,2,internal,Exit A
fu_tung_plaza,fu_tung_estate,2,covered_walkway,covered walkway
fu_tung_plaza,yu_tung_court,2,covered_walkway,covered walkway
fu_tung_plaza,tung_chung_health_centre,2,bridge,bridge
tung_chung_concourse,citygate_outlets,2,internal,Exit C
citygate_outlets,tung_chung_junction,2,bridge,bridge
tung_chung_junction,seaview_crescent,2,bridge,bridge
tung_chung_junction,le_bleu_deux,2,bridge,bridge
tung_chung_junction,coastal_skyline,2,bridge,bridge
coastal_skyline,caribbean_coast,8,covered_walkway,covered walkway
caribbean_coast,the_visionary,6,bridge,bridge
citygate_outlets,tung_chung_station_bus_terminus,2,internal,internal walkway
tung_chung_station_bus_terminus,yat_tung_estate,15,paid_bus,NLB 38

// --- TSEUNG KWAN O LINE (TRAIN TRACKS) ---
north_point_platform_tkl,quarry_bay_platform_tkl,4,paid_train,Tseung Kwan O Line (MTR)
quarry_bay_platform_tkl,yau_tong_platform_tkl,8,paid_train,Tseung Kwan O Line (MTR)
yau_tong_platform_tkl,tiu_keng_leng_platform_tkl,4,paid_train,Tseung Kwan O Line (MTR)
tiu_keng_leng_platform_tkl,tseung_kwan_o_platform_eb,4,paid_train,Tseung Kwan O Line (MTR),uni
tseung_kwan_o_platform_eb,hang_hau_platform,4,paid_train,Tseung Kwan O Line (MTR),uni
hang_hau_platform,po_lam_platform,4,paid_train,Tseung Kwan O Line (MTR)
tseung_kwan_o_platform_eb,lohas_park_platform,7,paid_train,Tseung Kwan O Line (MTR),uni
hang_hau_platform,tseung_kwan_o_platform_wb,4,paid_train,Tseung Kwan O Line (MTR),uni
lohas_park_platform,tseung_kwan_o_platform_wb,7,paid_train,Tseung Kwan O Line (MTR),uni
tseung_kwan_o_platform_wb,tiu_keng_leng_platform_tkl,6,paid_train,Tseung Kwan O Line (MTR),uni
tseung_kwan_o_platform_wb,tseung_kwan_o_platform_eb,2,paid_transfer,cross-platform transfer

// --- TSEUNG KWAN O LINE CONCOURSES ---
north_point_platform_tkl,north_point_concourse,2,fare_gate,fare gates
quarry_bay_platform_tkl,quarry_bay_concourse,10,fare_gate,fare gates
yau_tong_platform_tkl,yau_tong_concourse,2,fare_gate,fare gates
tiu_keng_leng_platform_tkl,tiu_keng_leng_concourse,2,fare_gate,fare gates
tseung_kwan_o_platform_eb,tseung_kwan_o_concourse,2,fare_gate,fare gates
tseung_kwan_o_platform_wb,tseung_kwan_o_concourse,2,fare_gate,fare gates
hang_hau_platform,hang_hau_concourse,2,fare_gate,fare gates
po_lam_platform,po_lam_concourse,2,fare_gate,fare gates
lohas_park_platform,lohas_park_concourse,2,fare_gate,fare gates

// --- TSEUNG KWAN O HUB ---
tseung_kwan_o_concourse,popcorn,2,internal,Exit C
popcorn,the_wings,2,lift,resident lift lobby
popcorn,popwalk,3,bridge,bridge over Po Yap Road
popwalk,the_wings_ii,2,lift,resident lift lobby
popcorn,popwalk_2,3,bridge,bridge over Po Yap Road
popwalk_2,the_wings_iii,2,lift,resident lift lobby
popcorn,park_central,2,bridge,bridge over Tong Yin Street
park_central,tiu_keng_leng_sports_centre,2,bridge,bridge over Po Shun Road
tiu_keng_leng_sports_centre,immigration_headquarters,3,bridge,bridge over Chui Ling Road
tiu_keng_leng_sports_centre,tseung_kwan_o_government_offices,3,bridge,bridge over Chui Ling Road
immigration_headquarters,tseung_kwan_o_government_offices,2,bridge,bridge
popcorn,tko_spot,4,bridge,bridge over Tong Ming Street Park
tko_spot,sheung_tak_estate,2,covered_walkway,covered walkway
sheung_tak_estate,kwong_ming_court,2,covered_walkway,covered walkway
sheung_tak_estate,tong_ming_court,2,bridge,bridge over Tong Ming Street
sheung_tak_estate,beverly_garden,2,bridge,bridge over Tong Ming Street
sheung_tak_estate,hong_kong_velodrome,2,bridge,bridge over Po Hong Road and covered walkway
sheung_tak_estate,tseung_kwan_o_sports_ground,2,bridge,bridge over Po Hong Road and covered walkway
hong_kong_velodrome,tseung_kwan_o_sports_ground,2,covered_walkway,covered walkway
popcorn,popcorn_2,2,bridge,bridge over Tong Chun Street
popcorn_2,the_grandiose,2,lift,resident lift lobby
popcorn_2,tseung_kwan_o_plaza,2,bridge,bridge
popcorn_2,bauhinia_garden,3,bridge,bridge over Po Yap Road

// --- HANG HAU HUB ---
hang_hau_concourse,the_lane,2,internal,Exit A1 or B1
the_lane,residence_oasis,2,lift,resident lift lobby
the_lane,east_point_city,2,bridge,bridge across Ming Shing Street
east_point_city,tko_gateway,3,bridge,bridge
tko_gateway,hau_tak_estate,2,covered_walkway,covered walkway
tko_gateway,chung_ming_court,2,covered_walkway,covered walkway
chung_ming_court,hau_tak_estate,2,covered_walkway,covered walkway
yu_ming_court,hau_tak_estate,2,covered_walkway,covered walkway
east_point_city,wo_ming_court,2,bridge,bridge over Pui Shing Road
wo_ming_court,yuk_ming_court,2,covered_walkway,covered walkway
wo_ming_court,ming_tak_estate,2,covered_walkway,covered walkway
ming_tak_estate,hin_ming_court,2,covered_walkway,covered walkway
the_lane,nan_fung_plaza,2,bridge,bridge over Pui Shing Road
the_lane,maritime_bay,2,bridge,bridge over Pui Shing Road
maritime_bay,la_cite_noble,2,internal,internal mall connection

// --- ADMIRALTY INTERCHANGE & EAST RAIL LINE ---
admiralty_platform_isl,admiralty_platform_twl,3,paid_transfer,cross-platform transfer
admiralty_platform_isl,admiralty_platform_erl,5,paid_transfer,platform level transfer (escalators)
admiralty_platform_twl,admiralty_platform_erl,5,paid_transfer,platform level transfer (escalators)
admiralty_platform_sil,admiralty_platform_twl,7,paid_transfer,platform level transfer (escalators)
admiralty_platform_sil,admiralty_platform_isl,7,paid_transfer,platform level transfer (escalators)
admiralty_platform_erl,admiralty_platform_sil,2,paid_transfer,platform level transfer (escalators)
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
exhibition_centre_platform,exhibition_centre_concourse,2,fare_gate,fare gates
exhibition_centre_concourse,wcn_junction,3,bridge,Exit A3 escalator
exhibition_centre_concourse,great_eagle_ctr,4,escalator,Exit B3 escalator
exhibition_centre_concourse,hkcec,6,bridge,Exit B3 escalator and bridge

// --- HUNG HOM HUB ---
hung_hom_platform_erl,hung_hom_concourse,2,fare_gate,fare gates
hung_hom_concourse,polyu,2,bridge,Exit A1 to PolyU
hung_hom_concourse,royal_peninsula,4,bridge,Exit B1 Footbridge
royal_peninsula,harbour_place,2,bridge,bridge
harbour_place,stars_by_the_harbour,2,bridge,bridge
stars_by_the_harbour,one_harbour_gate,2,bridge,bridge
hung_hom_concourse,new_east_ocean_centre,4,bridge,Exit D1 Footbridge

// --- TAI WAI HUB ---
tai_wai_platform_erl,tai_wai_concourse,2,fare_gate,fare gates
tai_wai_platform_tml,tai_wai_concourse,2,fare_gate,fare gates
tai_wai_concourse,the_wai,2,internal,Exits B/H to The Wai
tai_wai_concourse,the_pavilia_farm,2,internal,Exit B to The Pavilia Farm
tai_wai_concourse,tai_wai_pti,2,internal,Exit B to Public Transport Interchange
tai_wai_pti,dragons_range,30,residents_bus,NR839 Residents' Bus
tai_wai_pti,heung_yuen_wai_port,50,paid_bus,Citybus B8
tai_wai_concourse,grandway_garden,2,internal,Exit D to Grandway Garden
the_pavilia_farm,the_wai,2,covered_walkway,covered walkway
the_wai,festival_city,4,bridge,bridge

// --- SHA TIN HUB ---
sha_tin_platform,sha_tin_concourse,2,fare_gate,fare gates
sha_tin_concourse,citylink_mall,2,internal,Exit A2
sha_tin_concourse,new_town_plaza1,2,internal,Exit A3
citylink_mall,new_town_plaza1,2,internal,internal mall connection
new_town_plaza1,sha_tin_central_pti,2,escalator,Escalator to PTI
new_town_plaza1,new_town_plaza3,3,bridge,bridge
new_town_plaza1,wai_wah_centre,2,internal,internal mall connection
wai_wah_centre,hilton_plaza,2,bridge,bridge
hilton_plaza,scenery_court,2,bridge,bridge
hilton_plaza,new_town_plaza3,2,bridge,bridge
new_town_plaza3,royal_park_hotel,2,bridge,bridge
royal_park_hotel,new_town_tower,2,bridge,bridge
new_town_plaza1,new_town_tower,2,bridge,bridge
shatin_plaza,new_town_plaza1,2,internal,internal mall connection
new_town_plaza1,shatin_centre,2,bridge,bridge
new_town_plaza1,ntp_junction,1,bridge,bridge
sha_tin_town_hall,ntp_junction,1,bridge,covered walkway
sha_tin_library,ntp_junction,1,bridge,covered walkway
sha_tin_marriage,ntp_junction,1,bridge,covered walkway
shatin_plaza,shatin_centre,2,bridge,bridge
shatin_centre,lucky_plaza,2,bridge,bridge
lucky_plaza,sha_tin_junction,1,bridge,bridge
sha_tin_market,sha_tin_junction,1,bridge,bridge
lek_yuen_estate,sha_tin_junction,3,bridge,bridge
lek_yuen_estate,wo_che_estate,8,bridge,bridge
wo_che_estate,fung_wo_estate,2,bridge,bridge
sha_tin_central_pti,mei_tin_estate,20,paid_bus,KMB 283
sha_tin_central_pti,chun_yeung_estate,20,paid_bus,KMB 285

// --- TAI PO MARKET HUB ---
tai_po_market_platform,tai_po_market_concourse,2,fare_gate,fare gates
tai_po_market_concourse,uptown_plaza,2,internal,Exit A1 to Uptown Plaza
uptown_plaza,wan_tau_tong_estate,2,bridge,Footbridge to Wan Tau Tong Estate
tai_po_market_concourse,tai_po_market_pti,2,internal,Exit A3 to Tai Po Market PTI
tai_po_market_pti,fu_shin_estate,15,paid_bus,MTR Feeder Bus K17
tai_po_market_pti,kwong_fuk_estate,15,paid_bus,MTR Feeder Bus K18
fu_shin_estate,kwong_fuk_estate,10,paid_bus,KMB 71K to Tai Po Market,uni

// --- TAI WO HUB ---
tai_wo_platform,tai_wo_concourse,2,fare_gate,fare gates
tai_wo_concourse,tai_wo_plaza_west,2,internal,Exit A
tai_wo_concourse,tai_wo_plaza_east,2,internal,Exit B
tai_wo_plaza_west,tai_wo_plaza_east,2,internal,internal mall connection
tai_wo_plaza_west,tai_wo_bus_terminus,2,escalator,Escalator
tai_wo_bus_terminus,fu_tip_estate,20,paid_bus,KMB 72K

// --- FANLING HUB ---
fanling_platform,fanling_concourse,2,fare_gate,fare gates
fanling_concourse,fanling_town_center,2,bridge,Exit A1
fanling_town_center,fanling_centre,2,bridge,bridge
fanling_town_center,cheung_wah_estate,3,bridge,bridge
fanling_concourse,ka_fuk_estate,8,bridge,Exit B and covered walkway
ka_fuk_estate,ka_shing_court,2,bridge,covered walkway
fanling_concourse,fanling_station_road,2,bridge,Exit A2 and covered walkway
fanling_station_road,heung_yuen_wai_port,20,paid_bus,Citybus B7

// --- LUEN WO HUI ---
fanling_station_road,luen_wo_hui_pti,20,paid_bus,KMB 278K
apm,luen_wo_hui_pti,90,paid_bus,KMB 277X,uni
lam_tin_pti,luen_wo_hui_pti,100,paid_bus,KMB 277X
tsing_yi_pti,luen_wo_hui_pti,100,paid_bus,KMB 279X
luen_wo_hui_pti,regentville,2,escalator,escalator
regentville,grand_regentville,2,bridge,bridge over Wo Mun Street
regentville,wing_fai_centre,2,bridge,bridge over Wo Tai Street
regentville,belair_monte,2,bridge,bridge over Wo Mun Street
wing_fok_centre,wing_fai_centre,2,bridge,bridge over Luen Chit Street
wing_fai_centre,belair_monte,2,bridge,bridge over Wo Tai Street
grand_regentville,belair_monte,2,bridge,bridge
grand_regentville,green_code,2,bridge,bridge
wing_fai_centre,green_code,2,bridge,bridge
one_innovale,wing_fai_centre,3,bridge,bridge over Ma Sik Road
one_innovale,belair_monte,2,bridge,bridge over Ma Sik Road

// --- SHEUNG SHUI HUB ---
sheung_shui_concourse,landmark_north,2,bridge,Exit A4
landmark_north,spot,2,bridge,bridge
landmark_north,metropolis_plaza,2,bridge,bridge
sheung_shui_bus_terminus,landmark_north,2,escalator,escalator
nina_tower_bus_terminus,sheung_shui_bus_terminus,100,paid_bus,KMB 278X
metropolis_plaza,lung_fung_garden,2,bridge,bridge
lung_fung_garden,shek_wu_hui_municipal_services_building,2,bridge,bridge
shek_wu_hui_municipal_services_building,sheung_shui_centre,2,bridge,bridge
sheung_shui_concourse,sheung_shui_centre,2,bridge,Exit B2
sheung_shui_centre,sheung_shui_town_centre,2,bridge,bridge
sheung_shui_town_centre,sunningdale_garden,2,bridge,bridge
sheung_shui_concourse,choi_yuen_estate,4,bridge,Exit A1
landmark_north,sheung_shui_junction,4,bridge,bridge
sheung_shui_junction,choi_yuen_estate,2,bridge,bridge
choi_yuen_estate,choi_po_court,2,bridge,covered walkway
sheung_shui_junction,po_shek_wu_estate,2,bridge,bridge

// --- SHEUNG SHUI FARE GATES & TRANSFERS ---
sheung_shui_concourse,sheung_shui_platform_nb,2,fare_gate,fare gates
sheung_shui_concourse,sheung_shui_platform_sb,2,fare_gate,fare gates
sheung_shui_platform_nb,sheung_shui_platform_sb,3,paid_transfer,vertical concourse transfer

// --- BORDER CROSSINGS ---
heung_yuen_wai_port,liantang_port,5,bridge,border crossing
lo_wu_concourse,lo_wu_port,5,bridge,border crossing
lok_ma_chau_concourse,futian_port,5,bridge,border crossing

// --- REMAINING EAST RAIL LINE CONCOURSES ---
fo_tan_platform,fo_tan_concourse,2,fare_gate,fare gates
fo_tan_concourse,palazzo,4,bridge,Exit A and bridge
racecourse_platform,racecourse_concourse,2,fare_gate,fare gates
university_platform,university_concourse,2,fare_gate,fare gates
university_concourse,cyt_building,2,bridge,Exit B and covered walkway
lo_wu_platform,lo_wu_concourse,2,fare_gate,fare gates
lok_ma_chau_platform,lok_ma_chau_concourse,2,fare_gate,fare gates

// --- SOUTH ISLAND LINE (TRAIN TRACKS) ---
admiralty_platform_sil,ocean_park_platform,12,paid_train,South Island Line (MTR)
ocean_park_platform,wong_chuk_hang_platform,3,paid_train,South Island Line (MTR)
wong_chuk_hang_platform,lei_tung_platform,5,paid_train,South Island Line (MTR)
lei_tung_platform,south_horizons_platform,4,paid_train,South Island Line (MTR)

// --- SOUTH ISLAND LINE CONCOURSES ---
ocean_park_platform,ocean_park_concourse,2,fare_gate,fare gates
wong_chuk_hang_platform,wong_chuk_hang_concourse,2,fare_gate,fare gates
lei_tung_platform,lei_tung_concourse,2,fare_gate,fare gates
south_horizons_platform,south_horizons_concourse,2,fare_gate,fare gates

// --- POK FU LAM ---
queen_mary_hospital,kennedy_town_station_minibus_terminus,25,paid_bus,Green Minibus 54M
cyberport,admiralty_east_bus_terminus,60,paid_bus,Citybus 30X
cyberport,central_bus_terminus,50,paid_bus,Citybus 30X,uni

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
east_tst_platform,hung_hom_platform_tml,4,paid_train,Tuen Ma Line (MTR)
hung_hom_platform_tml,ho_man_tin_platform_tml,3,paid_train,Tuen Ma Line (MTR)
ho_man_tin_platform_tml,to_kwa_wan_platform,4,paid_train,Tuen Ma Line (MTR)
to_kwa_wan_platform,sung_wong_toi_platform,3,paid_train,Tuen Ma Line (MTR)
sung_wong_toi_platform,kai_tak_platform,3,paid_train,Tuen Ma Line (MTR)
kai_tak_platform,diamond_hill_platform_tml,4,paid_train,Tuen Ma Line (MTR)
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
nam_cheong_platform_tml,nam_cheong_platform_tcl,4,paid_transfer,platform transfer
east_tst_concourse,tsim_sha_tsui_concourse,14,internal,pedestrian subway
hung_hom_platform_tml,hung_hom_platform_erl,4,paid_transfer,escalator transfer
ho_man_tin_platform_tml,ho_man_tin_platform_ktl,8,paid_transfer,escalator transfer
diamond_hill_platform_tml,diamond_hill_platform_ktl,7,paid_transfer,vertical concourse transfer
tai_wai_platform_tml,tai_wai_platform_erl,4,paid_transfer,platform transfer

// --- TUEN MA LINE CONCOURSES ---
tuen_mun_platform,tuen_mun_concourse,2,fare_gate,fare gates
siu_hong_platform,siu_hong_concourse,2,fare_gate,fare gates
tin_shui_wai_platform,tin_shui_wai_concourse,2,fare_gate,fare gates
long_ping_platform,long_ping_concourse,2,fare_gate,fare gates
yuen_long_platform,yuen_long_concourse,2,fare_gate,fare gates
kam_sheung_road_platform,kam_sheung_road_concourse,2,fare_gate,fare gates
tsuen_wan_west_platform,tsuen_wan_west_concourse,2,fare_gate,fare gates
mei_foo_platform_tml,mei_foo_concourse_tml,2,fare_gate,fare gates
nam_cheong_platform_tml,nam_cheong_concourse,2,fare_gate,fare gates
austin_platform,austin_concourse,2,fare_gate,fare gates
east_tst_platform,east_tst_concourse,2,fare_gate,fare gates
hung_hom_platform_tml,hung_hom_concourse,2,fare_gate,fare gates
ho_man_tin_platform_tml,ho_man_tin_concourse,4,fare_gate,fare gates
to_kwa_wan_platform,to_kwa_wan_concourse,2,fare_gate,fare gates
sung_wong_toi_platform,sung_wong_toi_concourse,2,fare_gate,fare gates
kai_tak_platform,kai_tak_concourse,2,fare_gate,fare gates
diamond_hill_platform_tml,diamond_hill_concourse,2,fare_gate,fare gates
hin_keng_platform,hin_keng_concourse,2,fare_gate,fare gates
che_kung_temple_platform,che_kung_temple_concourse,2,fare_gate,fare gates
sha_tin_wai_platform,sha_tin_wai_concourse,2,fare_gate,fare gates
city_one_platform,city_one_concourse,2,fare_gate,fare gates
shek_mun_platform,shek_mun_concourse,2,fare_gate,fare gates
tai_shui_hang_platform,tai_shui_hang_concourse,2,fare_gate,fare gates
heng_on_platform,heng_on_concourse,2,fare_gate,fare gates
ma_on_shan_platform,ma_on_shan_concourse,2,fare_gate,fare gates
wu_kai_sha_platform,wu_kai_sha_concourse,2,fare_gate,fare gates`;

