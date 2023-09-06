import { useEffect, useState } from "react";
import { GalaxisCardV2 } from 'galaxis-components-v2';
import { getFilteredCards } from "../../ApiTester";
import config from "../../config/config";

const CardTest = ()=>{
	const traitTypes = [{"id":1,"name":"Physical Redeemables","icon_white":"\/storage\/app\/assets\/public\/trait_type_icons\/physical-white.svg","icon_orange":"\/storage\/app\/assets\/public\/trait_type_icons\/physical-orange.svg","icon_black":"\/storage\/app\/assets\/public\/trait_type_icons\/physical-black.svg"},{"id":2,"name":"Digital Redeemables","icon_white":"\/storage\/app\/assets\/public\/trait_type_icons\/digital-white.svg","icon_orange":"\/storage\/app\/assets\/public\/trait_type_icons\/digital-orange.svg","icon_black":"\/storage\/app\/assets\/public\/trait_type_icons\/digital-black.svg"},{"id":3,"name":"Discount Traits","icon_white":"\/storage\/app\/assets\/public\/trait_type_icons\/discount-white.svg","icon_orange":"\/storage\/app\/assets\/public\/trait_type_icons\/discount-orange.svg","icon_black":"\/storage\/app\/assets\/public\/trait_type_icons\/discount-black.svg"},{"id":4,"name":"Access Traits","icon_white":"\/storage\/app\/assets\/public\/trait_type_icons\/access-white.svg","icon_orange":"\/storage\/app\/assets\/public\/trait_type_icons\/access-orange.svg","icon_black":"\/storage\/app\/assets\/public\/trait_type_icons\/access-black.svg"},{"id":5,"name":"Modifiers","icon_white":"\/storage\/app\/assets\/public\/trait_type_icons\/modifier-white.svg","icon_orange":"\/storage\/app\/assets\/public\/trait_type_icons\/modifier-orange.svg","icon_black":"\/storage\/app\/assets\/public\/trait_type_icons\/modifier-black.svg"},{"id":6,"name":"Meeting","icon_white":"\/storage\/app\/assets\/public\/trait_type_icons\/meeting-white.svg","icon_orange":"\/storage\/app\/assets\/public\/trait_type_icons\/meeting-orange.svg","icon_black":"\/storage\/app\/assets\/public\/trait_type_icons\/meeting-black.svg"},{"id":7,"name":"Badges","icon_white":"\/storage\/app\/assets\/public\/trait_type_icons\/badge-white.svg","icon_orange":"\/storage\/app\/assets\/public\/trait_type_icons\/badge-orange.svg","icon_black":"\/storage\/app\/assets\/public\/trait_type_icons\/badge-black.svg"},{"id":8,"name":"Signature","icon_white":"\/storage\/app\/assets\/public\/trait_type_icons\/access-white.svg","icon_orange":"\/storage\/app\/assets\/public\/trait_type_icons\/autograph-orange.svg","icon_black":"\/storage\/app\/assets\/public\/trait_type_icons\/autograph-black.svg"}]

	//const [metadata, setMetadata] = useState();
  	const [loaded, setLoaded] = useState(true);

	const metadata = {
		tokenId: 1,
		name: "Galaxis Cards Gen Zero #1",
		image: "https://ether-cards.mypinata.cloud/ipfs/QmSVJcwKFqdo4hUDjMSN2biKcbG3zBEgUshsNBcpd9aUqh/1.png",
		collection_type: "galaxisV2",
		collection_name: "Galaxis Cards Gen Zero",
		animation_url: "tasiURL/metadataurlhttpnelkul",
		sides: [
			{
				id: 1,
				dna: "060503",
				image: "https://ether-cards.mypinata.cloud/ipfs/QmSVJcwKFqdo4hUDjMSN2biKcbG3zBEgUshsNBcpd9aUqh/1.png"
			},
			{
				id: 2,
				dna: "060501",
				image: "https://ether-cards.mypinata.cloud/ipfs/QmSVJcwKFqdo4hUDjMSN2biKcbG3zBEgUshsNBcpd9aUqh/1-side-2.png",
				thumbnail: "https://ether-cards.mypinata.cloud/ipfs/QmSVJcwKFqdo4hUDjMSN2biKcbG3zBEgUshsNBcpd9aUqh/thumb-1-side-2.png",
				display_mode: "highlight"
			}
		],
		attributes: [
			{
				value: "Orange",
				trait_type: "Background"
			},
			{
				value: "Type 5",
				trait_type: "HUD"
			},
			{
				value: "Shi",
				trait_type: "Character"
			},
			{
				value: "Teknos",
				trait_type: "Companion"
			},
			{
				value: "Zoltan Boros",
				trait_type: "Artist"
			},
			{
				value: "Gabor Szikszai",
				trait_type: "Artist"
			},
			{
				value: "Zsolt Kosa",
				trait_type: "Artist"
			},
			{
				trait_type: "Blue",
				value: "Color Scheme"
			}
		],
		about: "400 LEGENDARY MASTERPIECES, HANDCRAFTED WITH LOVE\n\nGalaxis Generation Zero Cards represent the future of dynamic digital collectibles.\n\nEvery elite membership card unlocks access to the most powerful smart contract technology and web3 utilities in existence.\n\nPlus, they just look so damn amazing in your wallet!",
		description: "Shi Mochi (pronounced She Moh-Chee) sometimes extended to Shi Mochi Mochi as a playful term of endearment by her fellow crew members.  To her foes, she is not nearly as sweet as her name may indicate.  To her friends and allies, she is a welcome and delicious treat.  She is a deadly assassin by trade.\n\nAlthough nobody knows her true origin - as a child, she apprenticed in the culinary arts.  Shi was also once a well-known Wagashi chef.  After poisoning a ruthless crime lord, his gang exacted revenge by removing her hands, feet and tongue.  In fact, without her retro futuristic cybernetic implants, she is severely disabled.",
		brand_logo: "https://ether-cards.mypinata.cloud/ipfs/QmSVJcwKFqdo4hUDjMSN2biKcbG3zBEgUshsNBcpd9aUqh/gzl.png",
		brand_url: "https://galaxis.xyz/sajt"
	  };

	/* useEffect(() => {
		(async () => {
			const urlParam = window.location.hash.slice(window.location.hash.indexOf('?')+1);

			console.log(window.location);

			console.log('URL PARAM',urlParam);

		getFilteredCards(urlParam,{})
			.then((response) => {
			console.log('res',response);
			if (response) {
				setMetadata(response);
				setLoaded(true);
			}
			})
			.catch((e) => {
			console.log(e);
			});
		})();
	}, []); */

	return (
		<>
		<div style={{width:"100%", height:"100%", padding:'50px', overflow:"hidden"}}>	
		{loaded && (
		
			<GalaxisCardV2
				name="Teszt"
				metadata={metadata}
				traitTypes={traitTypes}
				horizontalPadding={20}
				imageContainerWidth={400}
				apiUrl={config.API_URL}
			/>
			
			)
		}
		</div>
		</>
	);
}

export default CardTest;