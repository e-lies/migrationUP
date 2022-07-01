fetch("https://uplink.i-we.io/api/5dfa7a9d6bd6db00188af000/case/Case/5e0de0557394d700953b4d09/documents/5ebc13766865e7001a7dd3ba/content", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "fr",
        "x-window-id": "1a38719f-546c-4536-ae7a-ec5b66aa02ad",
        "Vary": "Accept-Language",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Authorization": "JWT eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWY3ZGY0Nzk1ZWM2MDAxM2UxMGJkOSIsImVudmlyb25tZW50cyI6eyI1ZGZhN2E5ZDZiZDZkYjAwMTg4YWYwMDAiOnsicHJvZmlsZSI6ImFkbWluIiwiYWxpYXMiOiI2MGFmN2RkNjgyYzAxYjAwMTFiYTA5MjQiLCJvcmdBbGlhcyI6IjVlMDRlNjQ4NTg5MmRjMDA4MjhkMzBhYiJ9fSwiZG9tYWluIjoidXBsaW5rIiwiY3VzdG9tZXJJZCI6IjVkZmE3YTlkNmJkNmRiMDAxODhhZWZlZiIsImxvZ2luIjoiZmFiaWVuLmJlcnRoaWVyQHVuaXByb21vdGlvbi5mciIsImxhbmd1YWdlIjoiZnIiLCJvcmdBY2NvdW50IjoiNWUxNjEwYTk3Y2RlMzgwMDE3N2NmMjRmIiwic2Vzc2lvbklkIjoiNjE3ODIwOTZmZDE4N2IwMDExMDc5YTc1In0sInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTYzNTI2MjYxNCwiZXhwIjoxNjM1MjYzODE0fQ.SvKSHf0xEcuoXqXZ7xj3vUr_7SIgyhz-XkbJR5g1gsGciFP2JXpDHCakmA9yXldPkWTAcSLYmH9tbFiIcf2UMMy6mqkJtBQB8s1KrJesw1SyWIO7LenQPqXkufOVNSXy-rAiXBiVpY6hoeAeTeM1o68w9TVyVvArXOL1yEuB4DGPamkC12DeiK7a0ZlO8p_LAmNfyTaqoh_zt5zXR0Bi8xLtjqSMoVmTDfV-PfvoQhs62Dz85qBDy5gmVodykLO-o76Ew2JSmhvLHcLWQmp9GyyT170bsDvu6TC73DIyDWv8GPISNm5I9ePrQaYoi5g5YrYB3mnDqnLhGFOWjkn5XA",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "referrer": "https://uplink.i-we.io/",
    "method": "GET",
    "mode": "cors"
}).then(prm=>prm.text()).then(rep=>console.log(rep))

const meta = {
    "_links": {
      "self": {
        "href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e0de0557394d700953b4d09/documents/5ebc13766865e7001a7dd3ba"
      },
      "curies": {
        "name": "iwe",
        "href": "/api/docs/resources/{rel}.md",
        "templated": true
      },
      "iwe:definition": {
        "href": "/api/5dfa7a9d6bd6db00188af000/dictionary/Document"
      },
      "iwe:case": {
        "href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e0de0557394d700953b4d09"
      },
      "iwe:self-parent": {
        "href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e0de0557394d700953b4d09"
      },
      "headVersion": {
        "href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e0de0557394d700953b4d09/documents/5ebc13766865e7001a7dd3ba/fileVersions/5ebc13776865e7001a7dd3bd"
      },
      "fileVersions": {
        "href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e0de0557394d700953b4d09/documents/5ebc13766865e7001a7dd3ba/fileVersions"
      },
      "comments": {
        "href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e0de0557394d700953b4d09/documents/5ebc13766865e7001a7dd3ba/comments"
      },
      "iwe:content": {
        "href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e0de0557394d700953b4d09/documents/5ebc13766865e7001a7dd3ba/content"
      },
      "iwe:content-url": {
        "href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e0de0557394d700953b4d09/documents/5ebc13766865e7001a7dd3ba/content-url"
      },
      "iwe:copy": {
        "href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e0de0557394d700953b4d09/documents/5ebc13766865e7001a7dd3ba/copy"
      }
    },
    "_embedded": {
      "fileVersions": [
        {
          "_links": {
            "self": {
              "href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e0de0557394d700953b4d09/documents/5ebc13766865e7001a7dd3ba/fileVersions/5ebc13776865e7001a7dd3bd"
            },
            "curies": {
              "name": "iwe",
              "href": "/api/docs/resources/{rel}.md",
              "templated": true
            },
            "iwe:definition": {
              "href": "/api/5dfa7a9d6bd6db00188af000/dictionary/iwe-FileVersion"
            },
            "iwe:case": {
              "href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e0de0557394d700953b4d09"
            },
            "iwe:self-parent": {
              "href": "/api/5dfa7a9d6bd6db00188af000/case/Case/5e0de0557394d700953b4d09/documents/5ebc13766865e7001a7dd3ba"
            }
          },
          "versionNumber": 1,
          "file_id": "183892a9-4058-4e12-b309-cfc16217f027",
          "length": 8450,
          "mimeType": "application/pdf",
          "filename": "COVEA - RAHMOUNI ISMAIL.pdf",
          "meta": {
            "storage": "s3",
            "md5": "5a4968e6df5788962fa4ec31d56688b0",
            "mime-type": "application/pdf",
            "date": "2020-05-13T15:34:14.958Z",
            "case-id": "5e0de0557394d700953b4d09",
            "document-version": "1",
            "document-id": "5ebc13766865e7001a7dd3ba",
            "bucket": "iwe-documents-prod",
            "key": "5dfa7a9d6bd6db00188af000/183892a9-4058-4e12-b309-cfc16217f027"
          },
          "hash": "5a4968e6df5788962fa4ec31d56688b0",
          "createdBy": {
            
            "$id": "5e53b2a1e261e9027990e06f"
          },
          "dateCreated": {
            "$date": "2020-05-13T15:34:15.196Z"
          },
          "_id": {
            "$id": "5ebc13776865e7001a7dd3bd"
          },
          "version": 1,
          "_meta": {},
          "_resourcePath": "/case/Case/documents/fileVersions"
        }
      ],
      "comments": []
    },
    "acknowledged": true,
    "name": "COVEA - RAHMOUNI ISMAIL.pdf",
    "fileDate": {
      "$date": "2020-05-13T15:34:14.958Z"
    },
    "createdBy": {
      "$id": "5e53b2a1e261e9027990e06f"
    },
    "modifiedBy": {
      "$id": "5e53b2a1e261e9027990e06f"
    },
    "dateCreated": {
      "$date": "2020-05-13T15:34:15.195Z"
    },
    "dateModified": {
      "$date": "2020-05-13T15:34:44.376Z"
    },
    "_id": {
      "$id": "5ebc13766865e7001a7dd3ba"
    },
    "version": 2,
    "headVersion": {
      "$id": "5ebc13776865e7001a7dd3bd"
    },
    "_meta": {
      "storage": "s3"
    },
    "_resourcePath": "/case/Case/documents"
  };

  
  %PDF-1.7

%����

1 0 obj

<</Pages 2 0 R /Type/Catalog>>

endobj

2 0 obj

<</Count 1/Kids[ 4 0 R ]/Type/Pages>>

endobj

3 0 obj

<</CreationDate(D:20200513171545)/Creator(PDFium)/Producer(PDFium)>>

endobj

4 0 obj

<</Contents 5 0 R /MediaBox[ 0 0 595.28 841.88]/Parent 2 0 R /Resources<</Font<</F1 6 0 R /F2 7 0 R /F3 8 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]/XObject<</img0 9 0 R /img1 10 0 R >>>>/Type/Page>>

endobj

5 0 obj

<</Filter/FlateDecode/Length 1809>>stream

x��Y�r�����S���Vʹ�i���
F�fJ�
��J6�D�3lI���&{�GJ�R���"����?HJ�UF-7_������y2�`ꌘ&$w37��̾�(����י����������?S�ÿ��45��a�\=-��P|Q`g��,H�g�(�0�T�)�����lf?\�_2�1�E��������^`on�D�G����o����fߣ��4����	�1�v��
Wt��m�:��l�f���$<��Y�n���ԉ@xM�J�f���x�Zw�����}��Z�X��Ю���"������Ѳr�Ю�Ú�> ���A����@�\�K��A�~��Ǔ,���Kj���̒���
����Ou�18�[y*H�]�AV�*ݕ����̷yY�Y�C�3��|	R���1��/��J��J�����#\��*�b�������&��h�j�Њ�A�7��]�c_؏V�h�e��������5�ϡ:E0��^C9y�zؖU�]e�+�x��qBY�b/c�b/��$r���//�֩������b��������>~��N��6w�iP�N�F�y���%��	���E�̏���������Ք�z�g0��gT?ӨF�Ċ��z�/|/�~X�.�*���9]������n��������`�/�	�j?1�;�A�s�
���ṷ��(����o�S��%�Qӹ����+zd9���5�z���b�V9*
E^~�M���`�u}�\8^��l�`�&����o�����E_kM�ۏ�iQe�l[��@#��%��A13�(ڗ�]�5���|������"������_|��h_�zW�nv�:��؎`���D*�?�5\�ZC-�V)V��3{$�}Wdey�k���G���8Ɗ�>fc���䩭%1�K ��Y�s�Ú��Ds�������R�tڷ|�i��{y�F�ޢ.(S"�������9��<���qnj��՜�a���4����?�vn.��6����?T��L#��]q�����Զ!��������柧�`έ��?)��n�"����\���*�����z��iM����������F�[��!:�&vOJ��S~$�j��������Ͻ�f�`Qn���n�x�b�hF͐8�և\��}��S�T� 5�����G��
�kD6�n���W,�%������S���I��� ����{y��̢]D��_�~��vtp�ȷa���gT��������bk�q�!�����0��.��໑��4�N�$�������6�5�9��wA�ٷ����K�����&��[��]bx}�7����1|;��n���Հ���1~v�	��O�K������֍�#N;���k,g/����/���T����WX��]`N:�z�
�j^C�x�^�ƿ�^��u�r�y��Ǟ�
�vd���ߋߡ�݉�����gw����.\���������6Tt?�θT"��)_�^aH����W�?H��^�V�uJ�wt�rxF���̈́��1]UG'c����Ϯ���j����{E����E�b��D���u�����-ޛ�j������p�!Y�I�{�Y��9qB����m�J�k�.��)����#X���aZ�|ݒN5��K����5��ww��(���H��I��������i��eV*.����)^�Zo��p�\aI�����R;�xPβ���sV���&E��Q]Z�ћ�aZW���	�/�L�G�5�l�T�y2m�m���.&���������z�lR*E��Ɇ<�v�4qt� (�CCBܔ_���(�CŌ��J�*c�*k;FUd��1i6��.����I�\��ޏ��h��U*�Pֈ�>�(�5�33��.\"l�w������V�3��}Jqߖ��kO|i�:����&N5��PF%�ӯ)��r*��P���ϸ���}�a���rET��Pk|�?Q����-�����/߰�b|����������V�8�7_���������X��


endstream

endobj

6 0 obj

<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>

endobj

7 0 obj

<</BaseFont/Times-Roman/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>

endobj

8 0 obj

<</BaseFont/Times-Italic/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>

endobj

9 0 obj

<</BitsPerComponent 8/ColorSpace/DeviceGray/Filter/FlateDecode/Height 92/Length 1296/Subtype/Image/Type/XObject/Width 92>>stream

x���k�TU����f���;3M�n���	���$E����nD�hЗ`���XX�,���P�
R�2���+���4��E��lK����jZ9S&s:���������/��a~���ν������g�w���J�^�
�?���B����P�~ ���R��8����T¿���e�#V�cë��9~��k�N���{/�[�c�����o�4��l��;֗�_L��ry��6׋ƞ�bj=��e����$NO�DO�����;��*��}��B�I�80�OO���1�K��I?x<��c�R�T$UOBs����4��F��{�%~�P
�EsJ����3�h��-��
'4*���S��~[�����������.8-��&�
�QgAܫ����i�����z�d�!�H����F���gs����\�=q����9�
뫄�%��x׿�lxL���^��pN�­b[UhE�sӰ>,�$N+rC���ƌ���'iK�������h�4��%&6N��&N�~�	
��G��ikg��p'�xt��1��vd�������1+�n�8?q\�N�֙ٳ2J<��%���
��d5�����l�6XM�KDe����,����6���i8�x�'�ױ���+8-w·BK�J
���v���2]L��ՃL�罂���cjo�l�M�I��۪�o)}��.0�?P�F![P�����g`1m)b��ɮ��v-߉�l��T����=�YKI����
� �v^`j����|�?ƒn����:�Ҟ�}��c����Ӛ��%����b����@6����5�?DЍ�������)�3��)3��=<CЂ?�����³��2�{����P#g6�Í�l����5�3�6p��������;۫�4��~rQFl|i�KY���@���{����t}���^����#���Hڑw@/qռ/��~�������5�|t�n���s{[Eѝ����,Mn���=�`�������j{�#��H�SС��H[o��)���P֛�w7�@��S�{a�n?�
�_niJ�^��ÓT�~�}��;��Yx�u��E�{ҷ$��bz��c�3��m_���oU	ݽ![ĸnW�L�[����jݍ�z���ܱ��ӟ�t��t�[���t�L%�e��P�
 ��{�!.����;w������t,]�����"���R/�~�����+��mh��`������u�)�M,�Gm�<y�k��*��f0}��H�����[��2��9���g��Hֱ�pv�M���Vj��O�=z�ܕk�O�4�{r�
�-��,	�&j��骆x�q˕J���R)�]��:@9��c:'����n��eӰ,��5�Kb�	ft6�xYQU�4�����`!�l4���.�EI�d��(�9f���(����|����a���G#������f�

endstream

endobj

10 0 obj

<</BitsPerComponent 8/ColorSpace[/CalRGB<</Gamma[ 2.2 2.2 2.2]/Matrix[ 0.41239 0.21264 0.01933 0.35758 0.71517 0.11919 0.18045 0.07218 0.9504]/WhitePoint[ 0.95043 1 1.09]>>]/Filter/FlateDecode/Height 92/Intent/Perceptual/Length 3701/SMask 9 0 R /Subtype/Image/Type/XObject/Width 92>>stream

x��	X�������"&����@�	��X�R}����k�.�J����Z�����j���hAA��$aGV��l��,"�("����<�d� �N���e����>�w�w�%s�?�s�;��>�>�wO������A}�T����J�*E�R����˨���]@���3z�7u�Z%���aT���0h�2*�����0�6u7���&���ŔE�Y[M��
�MݍSX��è��	E�p�R�_�0\����@P1,���ƫf#C��!�����7
�[����������Vw�����"��h���l��U��ZE_���/��b��T�����y@L�]4��:���!�M���p���Z�P1ݑkz����$�K��
���Q���X</�G�-5����3@������V,�G�S5����,Pg�UT���óU����ޛ}țU�" ����,�*b-��*� <?�u�0SX!S\�8��������@`�q��u� �H P�-���O<`�T���� T�1Z��J����d�0!�i<�. �����~�{ <�;+Dg���0��x��K9E���z��|���9��
��<lr (��������tFE���Z���#��>�����L1��ٮNh~�Ԃ���Wp󾎅?b�x��ڈ�A��8��&xn�x�u ��uJ�߷Y�Gl�0&*��<1��H��IRs�[Z��`�G���������Jϫֳ
�[��;�B�C�4� �/T��[�� ��G�<�]����B(6�6���y;��������b�*5�<�EKSb�ݡV�N��kQ�nL�1*@��V)��x��l�QU5�問u,��@��-ٜ��A��+�����`�Ya�u�`cbV��I�����ԙP4�����.���O�2���)h�	I1Ė7�-��u�ݓ�Ϫ�'�O
���B�g�mI�[^���%)�r؇�]Z��Փ1��>�X�(�d���+&,�0�e[�@'"@�	.�`&8��������I��W��
��+w�}�E'R�z�*R�HN*����0ް��YU��3WĂX,g%
����Y�94��hnۄ����?�@'2�Pe"����*Ä/��	[�!)���hl����x������ʻb��U8/�_mL��E�	���(�m�%T2���ĳW%�54��t����a�w�Ɨ���R^��;+�Dp�L���2y�J��_�'����了���W�)����Yx���=TU?����7����h��h����H����D �<|�BL`T�aɛ��{�Y{Ǥ�z<��;U���Ɲ�g�:�y���r~$d �F	���i�RV���.����0����q��P|X�Z�e��E�����s
��o�������]��{GBf���/Em�=�oh�b�Il��	�S`�����
�.���Zċ6&�56�{y����:iᅦ�v&%��jY� �P1�ӈ��M���ۈ.-�"�����w�������?�D�.�a�������m���[�;F�]'r�	����vJ��~���mvL����y$��x�*bB�#�^�r�;'��H���ޝ)��,ז;�=ѵ��1�yʊ�ϋ~��P�;@
�"k'��)5���&�4��¨!�� Sl���&,���ɳ����O������f���<�����Ȅ�� Ʉ�"Rv��6�m-�J�D�pF0���c�DO�o�t��"������h2m��~�8�%R�����%̈́����-Eq�A������ ��$�*�DHg#�?�i��|��]Ԇ�Y3V�j�0<�j�j	D��������������>��	��0�2�����\���gI3������|�za���5�7&ƦW�oJ���?5x�9�vM����Ls�l��T����1�A��S� C�v�+��5����3CGL�sn��H����)մ��3�������d!����N������Hb������qpI�Y���h���Hx�D`���Q��Y��3�|JyBf��c��}����X�/#$�45��4��S��>��?{�:���
,���w1�rܜh0�MʬZ�)��4��������ŧW������F�+�����{���.�ݾg4�\���:&���_H���.���*h��o�wP��������^9�p�=�I~ɽ
�2.\��j����o`K�i�v��u��A(��!Y&t�X��m>���}W��<�J��
r���hC\Q�}��0�d��y0x�Ϩ0���t ���?��F����u2w�{�Aq��$Yn��%.��W�?��q�΃�SC��	�b�'Ȕ��@ܡ��%�&j[H݄���ғ�B���������ز�[���n��y�9!0:���m���g�oF$�1�}
������I~�^����ڙ�c.�E�J"Kc/���9)<�l�K*=LxgH3�g����=HwB�1*���@s|r�|f?3��h<���	
x�AŸ�EAKqG*�A�p�x\�e����.��s����"˄�d�����aj�eȬs�������4��9�I2a�NSd�(��������^��P��2���Lt��Q{�{D�KS�w�x�)���}(��ޯ��,!L�q��Y�*�j!3�b�Ų%���e0��̀R��hTR�擝�w��+O�R%�ڽY'�%:����h8���L��=W^&�``;��
l$>�L��i=��08�-�E����_H\�/�oA�k�e�V���!,�a�L ���������/ߚ���XVA�����km�;h�l�cʖ#�6+�����R����}���1uؔ�y��M�vG�����vg�pϛ�"^�Db�:�#�X�C9���̤��%.���ϛ�8�ಜ�
�p�ִA�2���o���kM�:���m����(�F���\��GC�<�ջ �|���\�+�����&+)�����ʖC���ͺ���}^����P��4lJ败�k��/���Ԝ�]}����3J�n��.��k����s�Af~
�,7��d�c��&��������V�`}rq�C�_�b/Uy������k�:���t��&�^{]`�)2L��2����k�o<�K����<c��Y���+ϧTms��??&$��P>�[h�*�I�?C������_= S[�������°ҝ�y��4,ۚ�u힋[.��w����ς;w�����aY�������#�T@�(�������
��?��
���}���mU���9��p���j�<�Zp�|vDdbeR�_��e����S^V�x�ΌmGr�
���5�|w���z�Л�1e��ӗ��7>�����[RVu|��˷^�k�g������ۏ]��Xz�ぜӁ7Rs��:�w!�r�SjY�#���|
��^Y�K&��,�����	��𮯘
��_��d�C���q��䊍?>�<���ћ�怶��'�`z�_�lv˳���|#p�;�_����&q��`p0p��(��D���K��1�����ʋ��E������ۄk���ؖ��D�4p!>f��y�%��g���3�<�I~-P��[��0�M�ɐ���]�*Ϫa�	
<����<���uѝ���}�x��wL�Nă�<���{"GM���	��%|"�v۵��;����T8�/��U
F\L}z^����E(g�z��xd3Hd�a�sϼZ�JŴ�����ar)��R��^���L/����
��J��SRy'h�B�.b����W��B��i�2rû��$����P�2�2��g���	��"��������0v}��`��;���BX���?BU������]O�!�i��w��Y|�&cj��!Dg��^��e`�����. ��
���{�o�HY����Q��{���:�O[�[uc�,Z��`���ߘ��4�cN��1X��|zj�(aq=��N��!#V�x>*��:&�&�J�
UXt�lX\���-0!x��c���=�P�ݑk�\w
��1�߇�q������EK�a�rf���</���^��b��R�y�Ln	�����<���$�ؕ����u��I��I��I�����
��.

endstream

endobj

xref

0 11

0000000000 65535 f

0000000017 00000 n

0000000066 00000 n

0000000122 00000 n

0000000209 00000 n

0000000431 00000 n

0000002313 00000 n

0000002404 00000 n

0000002497 00000 n

0000002591 00000 n

0000004047 00000 n

trailer

<<

/Root 1 0 R

/Info 3 0 R

/Size 11/ID[<291020C315E70C44834F8822DC29B017><291020C315E70C44834F8822DC29B017>]>>

startxref

8070

%%EOF