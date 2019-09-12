<template>
  <MglMap
    :mapboxGl="mapbox-gl"
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
    :center="center"
    :zoom="5.5"
    style="height: 500px; width: 700px"
  >
    <MglAttributionControl/>
    <MglNavigationControl position="top-right"/>
    <MglGeolocateControl position="top-right"/>
    <MglScaleControl/>
  </MglMap>
</template>

<script>
  import Mapbox from 'mapbox-gl'
  import {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl
  } from 'vue-mapbox'

  export default {
    components: {
      MglMap,
      MglNavigationControl,
      MglGeolocateControl
    },
    name: 'MapBox',

    // woman related organizations nearby melbourne version 1
    //https://maps.googleapis.com/maps/api/place/textsearch/json?query=women&location=-36.958992,144.025451&radius=50000fields=photos,formatted_address,name&key=My_Key

    data () {
      return {
        accessToken: 'pk.eyJ1IjoidHlhbjAwMTYiLCJhIjoiY2psNGN0Z2gzMDZ4ZDNybmx6a3h0bWMzbSJ9.SbjTVR9BAQUGP0my5YqG2A',
        mapStyle: 'mapbox://styles/mapbox/streets-v11',
        center: [144.025451, -36.958992],
        shelterMarkers: {}
      }
    },

    created () {
      // We need to set mapbox-gl library here in order to use it in template
      this.mapbox = Mapbox
      this.shelterMarkers = {
        'html_attributions': [],
        'next_page_token': 'CoQC9AAAADwZctdKy_uQL6-Ns3-f6tJ4YHaPhrSRR--KGhm0Jy5jb7mpoGSAkVTp0bVWB9jcYw8CweAxrG6h2PPO8cu-qErje5bKBfe9Lv15jyJo_q0YpnjhzAfXgtVyrNCUG7ezcVKp1gdK48EiwybhSk2VhBm1RbL-KMXDjzPJdjpHKKPHisD1MWTRs13nqrx-tEuo7mOr7fZhO3_ZUZ-p-SXWR15ac9peTPaiNTP1C1zgKa4kW2FwFzbvvRnZMiPkdwrXjpyITYxZ0Ccs-l5gJmdU1EGKkK6PMBZ2WiUiYsjTdQMrGTZFAC1hDcxb7R6gwxg2VxmwDxM0auKUrsm_-MBLf6ESELcwsSgRqESZAcLmlEZv2BIaFEBt71HC_cVw8r-1IEz33QS9_r9f',
        'results': [
          {
            'formatted_address': 'Level 9/255 Bourke St, Melbourne VIC 3000, Australia',
            'geometry': {
              'location': {
                'lat': -37.8135683,
                'lng': 144.9661963
              },
              'viewport': {
                'northeast': {
                  'lat': -37.81208187010728,
                  'lng': 144.9676183298927
                },
                'southwest': {
                  'lat': -37.81478152989272,
                  'lng': 144.9649186701073
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': '04a7e92dcc392c13478e5037d664cf9ce342da43',
            'name': 'Women with Disabilities Victoria',
            'opening_hours': {
              'open_now': true
            },
            'place_id': 'ChIJ3VhzB8pC1moRdj-_aKM2j6c',
            'plus_code': {
              'compound_code': '5XP8+HF Melbourne, Victoria',
              'global_code': '4RJ65XP8+HF'
            },
            'rating': 5,
            'reference': 'ChIJ3VhzB8pC1moRdj-_aKM2j6c',
            'types': ['point_of_interest', 'establishment'],
            'user_ratings_total': 1
          },
          {
            'formatted_address': '20 Flemington Rd, Parkville VIC 3052, Australia',
            'geometry': {
              'location': {
                'lat': -37.7986147,
                'lng': 144.9548579
              },
              'viewport': {
                'northeast': {
                  'lat': -37.7975177,
                  'lng': 144.95893475
                },
                'southwest': {
                  'lat': -37.8002753,
                  'lng': 144.95349895
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png',
            'id': 'ec66cc45a781de4508b3cb02482d2710a1c7a82b',
            'name': 'The Royal Women\'s Hospital',
            'opening_hours': {
              'open_now': true
            },
            'photos': [
              {
                'height': 616,
                'html_attributions': [
                  '\u003ca href="https://maps.google.com/maps/contrib/103229085472819274280/photos"\u003eThe Royal Women&#39;s Hospital\u003c/a\u003e'
                ],
                'photo_reference': 'CmRaAAAAy77YTRqbTX6fDIJ9YJBqdm63jsVFabpRiWL_CvjFDd-hS1DJJXHLwajq3wGC4F8GgxRuxbnZCu9WIQYdubv4luAjBvLp3baWv0iEwTE_Pra_iee2okylL7JqI5eY0WV1EhAIh36ShXa3r5V8HFsW9Q3RGhQygEhBq-sR1wFk5bPk1YXK3yScOw',
                'width': 927
              }
            ],
            'place_id': 'ChIJeZEhcy5d1moRh6zmMr7W4Ng',
            'plus_code': {
              'compound_code': '6X23+HW Parkville, Victoria',
              'global_code': '4RJ66X23+HW'
            },
            'rating': 4,
            'reference': 'ChIJeZEhcy5d1moRh6zmMr7W4Ng',
            'types': ['hospital', 'point_of_interest', 'establishment'],
            'user_ratings_total': 145
          },
          {
            'formatted_address': '111 Coventry St, Southbank VIC 3006, Australia',
            'geometry': {
              'location': {
                'lat': -37.8308396,
                'lng': 144.9659161
              },
              'viewport': {
                'northeast': {
                  'lat': -37.82959052010728,
                  'lng': 144.9670988798927
                },
                'southwest': {
                  'lat': -37.83229017989272,
                  'lng': 144.9643992201072
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': 'b2eb7c44b7aad565feb78b3a424ceaa2013ffd9b',
            'name': 'Positive Women Victoria (PWV)',
            'opening_hours': {
              'open_now': true
            },
            'place_id': 'ChIJV-fTNz1o1moRwfKTogLklew',
            'plus_code': {
              'compound_code': '5X98+M9 Southbank, Victoria',
              'global_code': '4RJ65X98+M9'
            },
            'rating': 0,
            'reference': 'ChIJV-fTNz1o1moRwfKTogLklew',
            'types': ['point_of_interest', 'establishment'],
            'user_ratings_total': 0
          },
          {
            'formatted_address': '372 Spencer St, Melbourne VIC 3003, Australia',
            'geometry': {
              'location': {
                'lat': -37.811648,
                'lng': 144.9510728
              },
              'viewport': {
                'northeast': {
                  'lat': -37.81033412010728,
                  'lng': 144.9522992298927
                },
                'southwest': {
                  'lat': -37.81303377989272,
                  'lng': 144.9495995701073
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': '99f0734d5c7de146787b09252d1e55c2d18dca95',
            'name': 'WIRE Women\'s Information',
            'opening_hours': {
              'open_now': true
            },
            'photos': [
              {
                'height': 2048,
                'html_attributions': [
                  '\u003ca href="https://maps.google.com/maps/contrib/112475510644074675139/photos"\u003eIan Woodruff\u003c/a\u003e'
                ],
                'photo_reference': 'CmRaAAAAw85SJTBUgl_12rYydiIwsBwAbvhQbQrWJY3eOFFDLE2tomCOEFQS2OYNgQcKEx6bVCMuVpICvJhoH89XshUadrly7q7z7rtkVLZX-pNy1FyBf3kVjYyNoWoLBVWoZL8WEhDZdOhrJkIv-daJTgIAzuamGhQDSuNEJq7b2sADF5u1BwYTbnQgrA',
                'width': 1536
              }
            ],
            'place_id': 'ChIJH-0QzctC1moRP5bTnFr9DVk',
            'plus_code': {
              'compound_code': '5XQ2+8C Melbourne, Victoria',
              'global_code': '4RJ65XQ2+8C'
            },
            'rating': 4.3,
            'reference': 'ChIJH-0QzctC1moRP5bTnFr9DVk',
            'types': ['health', 'point_of_interest', 'establishment'],
            'user_ratings_total': 6
          },
          {
            'formatted_address': '131-133 Hawthorn Rd, Caulfield North VIC 3161, Australia',
            'geometry': {
              'location': {
                'lat': -37.8747429,
                'lng': 145.0244701
              },
              'viewport': {
                'northeast': {
                  'lat': -37.87338417010727,
                  'lng': 145.0257444298927
                },
                'southwest': {
                  'lat': -37.87608382989271,
                  'lng': 145.0230447701072
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': '5b9184023aebe2e71302288b645ca8fc40940c6d',
            'name': 'NCJWA (Vic) - National Council of Jewish Women of Australia Victoria',
            'opening_hours': {
              'open_now': true
            },
            'photos': [
              {
                'height': 800,
                'html_attributions': [
                  '\u003ca href="https://maps.google.com/maps/contrib/106693588271914494767/photos"\u003eNCJWA (Vic) - National Council of Jewish Women of Australia Victoria\u003c/a\u003e'
                ],
                'photo_reference': 'CmRaAAAAPRhGbex01k9VMRC4Q73Xac926Oo2ADQsMjnm2iJEjb6atxf_fQ4YHo35GfQyXU8UuFA1o9YvkxOxu1OP7sUgJTbqVp8AOsIWNbQrVSkgf6jImaNG9XUGB_x_SpHRIFHzEhBwOGSpZIHJsr5xW4yQkEnpGhRUSEsRlSGEZGhE3KWL-uHRnkOW_A',
                'width': 1200
              }
            ],
            'place_id': 'ChIJgaDvYr5p1moR_tq9QVN75xI',
            'plus_code': {
              'compound_code': '42GF+4Q Caulfield North, Victoria',
              'global_code': '4RJ742GF+4Q'
            },
            'rating': 0,
            'reference': 'ChIJgaDvYr5p1moR_tq9QVN75xI',
            'types': ['point_of_interest', 'establishment'],
            'user_ratings_total': 0
          },
          {
            'formatted_address': 'level 9/607 Bourke St, Melbourne VIC 3000, Australia',
            'geometry': {
              'location': {
                'lat': -37.81670099999999,
                'lng': 144.955545
              },
              'viewport': {
                'northeast': {
                  'lat': -37.81523117010727,
                  'lng': 144.9568405298927
                },
                'southwest': {
                  'lat': -37.81793082989272,
                  'lng': 144.9541408701073
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': '203c96ea4a3bf1ad402c13fdfdd362061f8325c3',
            'name': 'Women & Leadership Australia',
            'opening_hours': {
              'open_now': true
            },
            'photos': [
              {
                'height': 800,
                'html_attributions': [
                  '\u003ca href="https://maps.google.com/maps/contrib/114721907992258490822/photos"\u003eWomen &amp; Leadership Australia\u003c/a\u003e'
                ],
                'photo_reference': 'CmRaAAAAxatPaer8TcAcCl4aP1E1gEt_amJrDzpz3uPtvlEjWCk5HE8vtf_AfXH3TguOqz7M641DMq1QvxcuG1A4CYh8ZLFF9hSesVls9p7m6YuzLLsWYjOWEFHE8IbTrrw8rwtLEhCLD-WP5g0fyGIcRpSl3ltNGhQcXUf141sIdmGE9B6Zn3h2MBlS-Q',
                'width': 800
              }
            ],
            'place_id': 'ChIJI6qbgU5d1moRaXAWGZvCrdk',
            'plus_code': {
              'compound_code': '5XM4+86 Melbourne, Victoria',
              'global_code': '4RJ65XM4+86'
            },
            'rating': 0,
            'reference': 'ChIJI6qbgU5d1moRaXAWGZvCrdk',
            'types': ['point_of_interest', 'establishment'],
            'user_ratings_total': 0
          },
          {
            'formatted_address': '250 Queen St, Melbourne VIC 3000, Australia',
            'geometry': {
              'location': {
                'lat': -37.81269,
                'lng': 144.959964
              },
              'viewport': {
                'northeast': {
                  'lat': -37.81137407010728,
                  'lng': 144.9612020298927
                },
                'southwest': {
                  'lat': -37.81407372989272,
                  'lng': 144.9585023701073
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': '9aeecdabc579752e3768309b48c5c48eed673e90',
            'name': 'International Women\'s Development Agency',
            'opening_hours': {
              'open_now': true
            },
            'place_id': 'ChIJo5H_IrRC1moR8ZZiau7jND4',
            'plus_code': {
              'compound_code': '5XP5+WX Melbourne, Victoria',
              'global_code': '4RJ65XP5+WX'
            },
            'rating': 4,
            'reference': 'ChIJo5H_IrRC1moR8ZZiau7jND4',
            'types': ['point_of_interest', 'establishment'],
            'user_ratings_total': 5
          },
          {
            'formatted_address': '10 Springfield Ave, East St. Kilda VIC 3183, Australia',
            'geometry': {
              'location': {
                'lat': -37.870954,
                'lng': 145.003357
              },
              'viewport': {
                'northeast': {
                  'lat': -37.86960217010728,
                  'lng': 145.0046897798927
                },
                'southwest': {
                  'lat': -37.87230182989273,
                  'lng': 145.0019901201073
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': '72a08160fdbbef80713f617626a74103cbd88477',
            'name': 'Merkos Women',
            'place_id': 'ChIJG3udG01o1moR_3RLRlOKX6c',
            'plus_code': {
              'compound_code': '42H3+J8 St Kilda East, Victoria',
              'global_code': '4RJ742H3+J8'
            },
            'rating': 5,
            'reference': 'ChIJG3udG01o1moR_3RLRlOKX6c',
            'types': ['point_of_interest', 'establishment'],
            'user_ratings_total': 7
          },
          {
            'formatted_address': '622 Centre Rd, Bentleigh VIC 3204, Australia',
            'geometry': {
              'location': {
                'lat': -37.9202444,
                'lng': 145.050728
              },
              'viewport': {
                'northeast': {
                  'lat': -37.91889457010728,
                  'lng': 145.0520778298927
                },
                'southwest': {
                  'lat': -37.92159422989273,
                  'lng': 145.0493781701072
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': '1d59de009a8ae5b4258232f53fbf81220dcbe89e',
            'name': 'Bayside Womens Health',
            'opening_hours': {},
            'place_id': 'ChIJRdmewOFr1moR7bqS5yG2hUE',
            'plus_code': {
              'compound_code': '33H2+V7 Bentleigh, Victoria',
              'global_code': '4RJ733H2+V7'
            },
            'rating': 5,
            'reference': 'ChIJRdmewOFr1moR7bqS5yG2hUE',
            'types': ['health', 'point_of_interest', 'establishment'],
            'user_ratings_total': 2
          },
          {
            'formatted_address': 'Level 10/277 William St, Melbourne VIC 3000, Australia',
            'geometry': {
              'location': {
                'lat': -37.81254,
                'lng': 144.9563499
              },
              'viewport': {
                'northeast': {
                  'lat': -37.81113832010728,
                  'lng': 144.9578929798927
                },
                'southwest': {
                  'lat': -37.81383797989272,
                  'lng': 144.9551933201072
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': '596601b0378461b92a3f402f9a065d9c8aff837f',
            'name': 'Women\'s Legal Service Victoria',
            'opening_hours': {
              'open_now': true
            },
            'photos': [
              {
                'height': 3024,
                'html_attributions': [
                  '\u003ca href="https://maps.google.com/maps/contrib/118153111859542753795/photos"\u003eA Google User\u003c/a\u003e'
                ],
                'photo_reference': 'CmRZAAAAPNUN4OIfIAo3KbHVR5amIjygq9IQrsjQ2jjYYr8dTeeuAfymEFqtJyVcYGwMt8pz29LIgRDRTjPr1T3tmIfKNXi6d0xeVe4DBD69EHXCy3kKke2v-xB8V_3ZvDm637tHEhCosqqehW8WqFF0LOJSJ66DGhT9lJO_7hXY8p8qnhnLIiNojqA-Hg',
                'width': 4032
              }
            ],
            'place_id': 'ChIJB14MMkpd1moRaAZkYYfTsGs',
            'plus_code': {
              'compound_code': '5XP4+XG Melbourne, Victoria',
              'global_code': '4RJ65XP4+XG'
            },
            'rating': 3,
            'reference': 'ChIJB14MMkpd1moRaAZkYYfTsGs',
            'types': ['point_of_interest', 'establishment'],
            'user_ratings_total': 6
          },
          {
            'formatted_address': 'Suite 12/762 Toorak Rd, Glen Iris VIC 3146, Australia',
            'geometry': {
              'location': {
                'lat': -37.8455603,
                'lng': 145.0453158
              },
              'viewport': {
                'northeast': {
                  'lat': -37.84414272010728,
                  'lng': 145.0466599798927
                },
                'southwest': {
                  'lat': -37.84684237989272,
                  'lng': 145.0439603201073
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': 'a99c9e6b335f937225088d1965ad5568f8a5ca97',
            'name': 'WUMe-Women\'s Ultrasound Melbourne-Glen Iris',
            'opening_hours': {},
            'place_id': 'ChIJUeBbIhxC1moRHj_j0nBoRuo',
            'plus_code': {
              'compound_code': '523W+Q4 Glen Iris, Victoria',
              'global_code': '4RJ7523W+Q4'
            },
            'rating': 4.6,
            'reference': 'ChIJUeBbIhxC1moRHj_j0nBoRuo',
            'types': ['doctor', 'health', 'point_of_interest', 'establishment'],
            'user_ratings_total': 5
          },
          {
            'formatted_address': '463 Centre Rd, Bentleigh VIC 3204, Australia',
            'geometry': {
              'location': {
                'lat': -37.9186693,
                'lng': 145.0411794
              },
              'viewport': {
                'northeast': {
                  'lat': -37.91736642010728,
                  'lng': 145.0425195798927
                },
                'southwest': {
                  'lat': -37.92006607989272,
                  'lng': 145.0398199201073
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png',
            'id': 'fb11307ee880e8c20f6b7e6ec4e832e6fd25d897',
            'name': 'Medi7 Women\'s Clinic Bentleigh',
            'opening_hours': {
              'open_now': false
            },
            'photos': [
              {
                'height': 1771,
                'html_attributions': [
                  '\u003ca href="https://maps.google.com/maps/contrib/104934941948328865900/photos"\u003eMedi7 Women&#39;s Clinic Bentleigh\u003c/a\u003e'
                ],
                'photo_reference': 'CmRaAAAA4fQaFGPOI30ineBElY8Wt7PNWiP--K-MENqrA0TcMOVJcYp1TsrvVuOXFCtXj8YF9lP56aL9b_GHGAAQqeItDA3NR1ArJLE2EidA5AUswIozzQxFAYllpx5--K2oLUz-EhBAX3ZbOdzPBZudsKmpJvUGGhQEJj7VZ-LDNE-Ltj-m_r4VdTfBTQ',
                'width': 1771
              }
            ],
            'place_id': 'ChIJHcbIgVtp1moRjPfTW34HZmA',
            'plus_code': {
              'compound_code': '32JR+GF Bentleigh, Victoria',
              'global_code': '4RJ732JR+GF'
            },
            'rating': 0,
            'reference': 'ChIJHcbIgVtp1moRjPfTW34HZmA',
            'types': ['hospital', 'health', 'point_of_interest', 'establishment'],
            'user_ratings_total': 0
          },
          {
            'formatted_address': '205/122 Toorak Rd, South Yarra VIC 3141, Australia',
            'geometry': {
              'location': {
                'lat': -37.8390861,
                'lng': 144.9902108
              },
              'viewport': {
                'northeast': {
                  'lat': -37.83760042010727,
                  'lng': 144.9915891298928
                },
                'southwest': {
                  'lat': -37.84030007989272,
                  'lng': 144.9888894701073
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': '3ff05499b6cc6a4304010b9bc0e96453588e92fc',
            'name': 'Melbourne Women’s Fund',
            'place_id': 'ChIJmV4kuZ1C1moR4nzSiRabGLs',
            'plus_code': {
              'compound_code': '5X6R+93 South Yarra, Victoria',
              'global_code': '4RJ65X6R+93'
            },
            'rating': 0,
            'reference': 'ChIJmV4kuZ1C1moR4nzSiRabGLs',
            'types': ['point_of_interest', 'establishment'],
            'user_ratings_total': 0
          },
          {
            'formatted_address': 'level 6/126 Wellington Parade S, East Melbourne VIC 3002, Australia',
            'geometry': {
              'location': {
                'lat': -37.8162615,
                'lng': 144.9860256
              },
              'viewport': {
                'northeast': {
                  'lat': -37.81491437010728,
                  'lng': 144.9874065298927
                },
                'southwest': {
                  'lat': -37.81761402989272,
                  'lng': 144.9847068701072
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': '8997d81833b050ed62f7a14aaae13222e9334ba8',
            'name': 'Australian Women Donors Network',
            'opening_hours': {
              'open_now': true
            },
            'photos': [
              {
                'height': 2448,
                'html_attributions': [
                  '\u003ca href="https://maps.google.com/maps/contrib/102186002373798368450/photos"\u003eAustralian Women Donors Network\u003c/a\u003e'
                ],
                'photo_reference': 'CmRaAAAAhS8sxHKjvHDo5gklP5mqVRZpsKM01ElHjL1xYwM4CkI9EP6CCUvZWgC4fcBvKghu2ZQ2K1lmUcvi2Qy-Ji5P8iOvVUEPeoTEX4vqlwXGO1QD3u6ychdKZtDpdXYWLp4UEhA21fUioZ5f3cGg1RGa3YdsGhSAFNu7Oj0KvPztU2NZKQcIUq4V3Q',
                'width': 3264
              }
            ],
            'place_id': 'ChIJG26ePbNC1moReVWDgJZPvlA',
            'plus_code': {
              'compound_code': '5XMP+FC East Melbourne, Victoria',
              'global_code': '4RJ65XMP+FC'
            },
            'rating': 0,
            'reference': 'ChIJG26ePbNC1moReVWDgJZPvlA',
            'types': ['point_of_interest', 'establishment'],
            'user_ratings_total': 0
          },
          {
            'formatted_address': 'Level 1/210 Kings Way, South Melbourne VIC 3205, Australia',
            'geometry': {
              'location': {
                'lat': -37.8299923,
                'lng': 144.9638509
              },
              'viewport': {
                'northeast': {
                  'lat': -37.82857467010728,
                  'lng': 144.9653137798927
                },
                'southwest': {
                  'lat': -37.83127432989272,
                  'lng': 144.9626141201072
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': 'ed76129b7caed446324460bb67323d90e9be91ca',
            'name': 'YWCA Australia',
            'opening_hours': {
              'open_now': true
            },
            'photos': [
              {
                'height': 360,
                'html_attributions': [
                  '\u003ca href="https://maps.google.com/maps/contrib/111835308623976515027/photos"\u003eA Google User\u003c/a\u003e'
                ],
                'photo_reference': 'CmRaAAAA_JTZVCFqOQmtle-JFvEw2PM_xUMDSSitTYkXU9uXByc6fJGz38dmbt7E-Bp2v1OhQnip6Iqj92OY2xGJVeWxAtEsvE0GPY69_PdiDNPyN50R2ADVYGo2jOQ1duEReefXEhD1L9o3Zg2pjSD2UJARlzpzGhR7Y0bYWafKdu_jpxtvplddZNHbWw',
                'width': 820
              }
            ],
            'place_id': 'ChIJuwHppTJd1moR2RmxzJfkuMk',
            'plus_code': {
              'compound_code': '5XC7+2G South Melbourne, Victoria',
              'global_code': '4RJ65XC7+2G'
            },
            'rating': 2.8,
            'reference': 'ChIJuwHppTJd1moR2RmxzJfkuMk',
            'types': ['point_of_interest', 'establishment'],
            'user_ratings_total': 4
          },
          {
            'formatted_address': '247 Flinders Ln, Melbourne VIC 3000, Australia',
            'geometry': {
              'location': {
                'lat': -37.8168435,
                'lng': 144.9660278
              },
              'viewport': {
                'northeast': {
                  'lat': -37.81545802010727,
                  'lng': 144.9673611298927
                },
                'southwest': {
                  'lat': -37.81815767989272,
                  'lng': 144.9646614701073
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': '249134a993986fbf23ebb7e0b0f4225311617a97',
            'name': 'Union of Australian Women',
            'place_id': 'ChIJWen_IrRC1moR04vrFfT2Fgo',
            'plus_code': {
              'compound_code': '5XM8+7C Melbourne, Victoria',
              'global_code': '4RJ65XM8+7C'
            },
            'rating': 0,
            'reference': 'ChIJWen_IrRC1moR04vrFfT2Fgo',
            'types': ['point_of_interest', 'establishment'],
            'user_ratings_total': 0
          },
          {
            'formatted_address': '20 Golding St, Canterbury VIC 3126, Australia',
            'geometry': {
              'location': {
                'lat': -37.82842900000001,
                'lng': 145.084978
              },
              'viewport': {
                'northeast': {
                  'lat': -37.82696277010729,
                  'lng': 145.0863501298927
                },
                'southwest': {
                  'lat': -37.82966242989273,
                  'lng': 145.0836504701073
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': 'a28153774740e018e8d90c6d63a2ae86498a0870',
            'name': 'Wise Woman Business',
            'opening_hours': {
              'open_now': true
            },
            'photos': [
              {
                'height': 1159,
                'html_attributions': [
                  '\u003ca href="https://maps.google.com/maps/contrib/112401480326423719187/photos"\u003eWise Woman Business\u003c/a\u003e'
                ],
                'photo_reference': 'CmRaAAAAfSNVd3aU6D6u0ocI7c-DXZUOYMQmlbVpyfpb_3yfyJlCbWjwPADlpkb_O55mIcWU4WjZNLUUAEJ-8sAv_3yURj6Te6RPlXuKdZ1GDeeKwhE1D0SBbaLv6N3nvUoMRSWrEhC1ELWDQOPL1fkEdg_hgjjyGhSxoDJGsftLKeP_Xsi0ZNcs_J5EFQ',
                'width': 1144
              }
            ],
            'place_id': 'ChIJbZebqwVB1moRZQMIQWbUSSk',
            'plus_code': {
              'compound_code': '53CM+JX Canterbury, Victoria',
              'global_code': '4RJ753CM+JX'
            },
            'rating': 0,
            'reference': 'ChIJbZebqwVB1moRZQMIQWbUSSk',
            'types': ['health', 'point_of_interest', 'establishment'],
            'user_ratings_total': 0
          },
          {
            'formatted_address': 'Pit 6, Aughtie Dr, Albert Park VIC 3206, Australia',
            'geometry': {
              'location': {
                'lat': -37.8510779,
                'lng': 144.9705865
              },
              'viewport': {
                'northeast': {
                  'lat': -37.84974432010728,
                  'lng': 144.9719154798927
                },
                'southwest': {
                  'lat': -37.85244397989273,
                  'lng': 144.9692158201073
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': '42b80ec61276b1eadab8c55f58a3b0577e100da1',
            'name': 'South Melbourne Women\'s Football Club',
            'opening_hours': {
              'open_now': false
            },
            'photos': [
              {
                'height': 1261,
                'html_attributions': [
                  '\u003ca href="https://maps.google.com/maps/contrib/103483392234267050067/photos"\u003eA Google User\u003c/a\u003e'
                ],
                'photo_reference': 'CmRaAAAAgYAbidXQZ6WmcEazEvf8mVPJupe1wxkbVDLjQGNwSi04YSCxMJr2cAkpZvnm7TXaerFyzIbcBcsdm2yl1TK2egTswD2yLQnTJTpjg4chiqDa0qQBXVkL8yTWj_xKhBc1EhAG0O1XY7yCJavAc3priiFJGhRRE0ueaQi8qzuR1a_-jRVirGkCyA',
                'width': 1280
              }
            ],
            'place_id': 'ChIJjQo5bQ1o1moRTO73_5iaT8o',
            'plus_code': {
              'compound_code': '4XXC+H6 Albert Park, Victoria',
              'global_code': '4RJ64XXC+H6'
            },
            'rating': 4.3,
            'reference': 'ChIJjQo5bQ1o1moRTO73_5iaT8o',
            'types': ['point_of_interest', 'establishment'],
            'user_ratings_total': 4
          },
          {
            'formatted_address': '2/650 Bridge Rd, Richmond VIC 3121, Australia',
            'geometry': {
              'location': {
                'lat': -37.82034850000001,
                'lng': 145.0137523
              },
              'viewport': {
                'northeast': {
                  'lat': -37.81888622010727,
                  'lng': 145.0151294298927
                },
                'southwest': {
                  'lat': -37.82158587989272,
                  'lng': 145.0124297701073
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png',
            'id': '0c091df96dbac6967c9d920b6d96e57790b4b452',
            'name': 'ARC Women’s Wellness',
            'opening_hours': {
              'open_now': true
            },
            'place_id': 'ChIJ0yHPSBlC1moRR4ByakaMMrs',
            'plus_code': {
              'compound_code': '52H7+VG Richmond, Victoria',
              'global_code': '4RJ752H7+VG'
            },
            'rating': 0,
            'reference': 'ChIJ0yHPSBlC1moRR4ByakaMMrs',
            'types': ['hospital', 'health', 'point_of_interest', 'establishment'],
            'user_ratings_total': 0
          },
          {
            'formatted_address': '67 Cade Way, Parkville VIC 3052, Australia',
            'geometry': {
              'location': {
                'lat': -37.7771947,
                'lng': 144.9388394
              },
              'viewport': {
                'northeast': {
                  'lat': -37.77572852010728,
                  'lng': 144.9400665298928
                },
                'southwest': {
                  'lat': -37.77842817989272,
                  'lng': 144.9373668701073
                }
              }
            },
            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
            'id': 'f45a3afa6edc88d09a3f4638ef456fe2f7e4d5fc',
            'name': 'McAuley Community Services for Women',
            'place_id': 'ChIJ_XmO8Odc1moR3Kansnvuz2c',
            'plus_code': {
              'compound_code': '6WFQ+4G Parkville, Victoria',
              'global_code': '4RJ66WFQ+4G'
            },
            'rating': 4,
            'reference': 'ChIJ_XmO8Odc1moR3Kansnvuz2c',
            'types': ['point_of_interest', 'establishment'],
            'user_ratings_total': 2
          }
        ],
        'status': 'OK'
      }
    }
    // methods: {
    // async onMapLoad(event) {
    //   // Here we cathing 'load' map event
    //   const asyncActions = event.component.actions
    //
    //   const newParams = await asyncActions.flyTo({
    //     center: [144.96332, -37.814],
    //     zoom: 12,
    //     speed: 1
    //   })
    //   /* => {
    //           center: [30, 30],
    //           zoom: 9,
    //           bearing: 9,
    //           pitch: 7
    //         }
    //   */
    // }
    // }
  }
</script>

<style scoped>

</style>
