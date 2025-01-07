const CACHE_NAME = "my-cache-v1";
const urlsToCache = [
    "/",
    "/js/game.js",
    "/images/font-8x8.png",
    "/images/tileset-colors-8x8.png",
    "/puzzles/list.txt",
    "/puzzles/xsb/1,000,001candlelights.xsb",
    "/puzzles/xsb/1,000,002candlelights.xsb",
    "/puzzles/xsb/100,000movesonly.xsb",
    "/puzzles/xsb/100Boxes.xsb",
    "/puzzles/xsb/12Blocks.xsb",
    "/puzzles/xsb/23x11.xsb",
    "/puzzles/xsb/4REC.xsb",
    "/puzzles/xsb/696.xsb",
    "/puzzles/xsb/81.xsb",
    "/puzzles/xsb/A.K.K.Informatika.xsb",
    "/puzzles/xsb/ABHT01.xsb",
    "/puzzles/xsb/ABHT02.xsb",
    "/puzzles/xsb/ABHT03.xsb",
    "/puzzles/xsb/AC-Smileys.xsb",
    "/puzzles/xsb/AC-Smileys_2.xsb",
    "/puzzles/xsb/AC-Smileys_3.xsb",
    "/puzzles/xsb/ACDiamonds.xsb",
    "/puzzles/xsb/ACEasy.xsb",
    "/puzzles/xsb/ACSelected.xsb",
    "/puzzles/xsb/ACSmileys4.xsb",
    "/puzzles/xsb/Aeternus.xsb",
    "/puzzles/xsb/Alakina.xsb",
    "/puzzles/xsb/Albe.xsb",
    "/puzzles/xsb/Alberto.xsb",
    "/puzzles/xsb/AlbertoGarcia.xsb",
    "/puzzles/xsb/AlbertoGarcia2.xsb",
    "/puzzles/xsb/AlbertoGarcia3.xsb",
    "/puzzles/xsb/AlbertoGarcia4.xsb",
    "/puzzles/xsb/AlbertoGarciaArranged.xsb",
    "/puzzles/xsb/AlbertoGarciaPlus2.xsb",
    "/puzzles/xsb/AlbertoMultipack.xsb",
    "/puzzles/xsb/Albizia.xsb",
    "/puzzles/xsb/Alejandro.xsb",
    "/puzzles/xsb/AllRemodels.xsb",
    "/puzzles/xsb/AlphabetSoup.xsb",
    "/puzzles/xsb/AmazingOrimazing.xsb",
    "/puzzles/xsb/Anomaly.xsb",
    "/puzzles/xsb/Anomaly2.xsb",
    "/puzzles/xsb/Anomaly3.xsb",
    "/puzzles/xsb/ArmadaCollection1.xsb",
    "/puzzles/xsb/Aruba1.xsb",
    "/puzzles/xsb/Aruba10.xsb",
    "/puzzles/xsb/Aruba2.xsb",
    "/puzzles/xsb/Aruba3.xsb",
    "/puzzles/xsb/Aruba4.xsb",
    "/puzzles/xsb/Aruba5.xsb",
    "/puzzles/xsb/Aruba6.xsb",
    "/puzzles/xsb/Aruba7.xsb",
    "/puzzles/xsb/Aruba8.xsb",
    "/puzzles/xsb/Aruba9.xsb",
    "/puzzles/xsb/Atlas01.xsb",
    "/puzzles/xsb/Atlas02.xsb",
    "/puzzles/xsb/Atlas03.xsb",
    "/puzzles/xsb/Atlas04.xsb",
    "/puzzles/xsb/Atlas05.xsb",
    "/puzzles/xsb/Atlas06.xsb",
    "/puzzles/xsb/Atlas07.xsb",
    "/puzzles/xsb/Atlas08.xsb",
    "/puzzles/xsb/Atlas09.xsb",
    "/puzzles/xsb/Atlas10.xsb",
    "/puzzles/xsb/Attrition.xsb",
    "/puzzles/xsb/Attrition05.xsb",
    "/puzzles/xsb/Attrition2.xsb",
    "/puzzles/xsb/Attrition3.xsb",
    "/puzzles/xsb/Attrition4.xsb",
    "/puzzles/xsb/Avala.xsb",
    "/puzzles/xsb/Backtoorigins.xsb",
    "/puzzles/xsb/BanjaKoviljaca.xsb",
    "/puzzles/xsb/Barona.xsb",
    "/puzzles/xsb/Beear.xsb",
    "/puzzles/xsb/BeijingOlympics.xsb",
    "/puzzles/xsb/BigBen.xsb",
    "/puzzles/xsb/Birthday.xsb",
    "/puzzles/xsb/Blazz.xsb",
    "/puzzles/xsb/Blazz2.xsb",
    "/puzzles/xsb/Blocks.xsb",
    "/puzzles/xsb/Boring.xsb",
    "/puzzles/xsb/Boxxle1.xsb",
    "/puzzles/xsb/Boxxle2.xsb",
    "/puzzles/xsb/Brainsport.xsb",
    "/puzzles/xsb/BrainsportExtreme.xsb",
    "/puzzles/xsb/BravoPremysilZika.xsb",
    "/puzzles/xsb/BrianKentsSokoban2KsSokoban2K.xsb",
    "/puzzles/xsb/Bringamosa.xsb",
    "/puzzles/xsb/BrunaMaria.xsb",
    "/puzzles/xsb/BrunoDruille.xsb",
    "/puzzles/xsb/Bugs1005collections.xsb",
    "/puzzles/xsb/Bugs509collection.xsb",
    "/puzzles/xsb/Bugs550collection.xsb",
    "/puzzles/xsb/BugsCollection138.xsb",
    "/puzzles/xsb/BugsCollection97.xsb",
    "/puzzles/xsb/Bugscollection.xsb",
    "/puzzles/xsb/Bugscollection2.xsb",
    "/puzzles/xsb/Bugscollection3.xsb",
    "/puzzles/xsb/Bugsspecialcollection.xsb",
    "/puzzles/xsb/C-Soko.xsb",
    "/puzzles/xsb/Cadushi.xsb",
    "/puzzles/xsb/Calx.xsb",
    "/puzzles/xsb/Cappuccino.xsb",
    "/puzzles/xsb/CargoBayDeluxe.xsb",
    "/puzzles/xsb/Cer.xsb",
    "/puzzles/xsb/ChaoticCatalysts.xsb",
    "/puzzles/xsb/ChoribanLevels.xsb",
    "/puzzles/xsb/ChrysalisCollection.xsb",
    "/puzzles/xsb/ChrysalisCollection10.xsb",
    "/puzzles/xsb/ChrysalisCollection2.xsb",
    "/puzzles/xsb/ChrysalisCollection3.xsb",
    "/puzzles/xsb/ChrysalisCollection4.xsb",
    "/puzzles/xsb/ChrysalisCollection5.xsb",
    "/puzzles/xsb/ChrysalisCollection6.xsb",
    "/puzzles/xsb/ChrysalisCollection7.xsb",
    "/puzzles/xsb/ChrysalisCollection8.xsb",
    "/puzzles/xsb/ChrysalisCollection9.xsb",
    "/puzzles/xsb/ChrysalisVariations01.xsb",
    "/puzzles/xsb/ChrysalisVariations02.xsb",
    "/puzzles/xsb/Chuchubi01.xsb",
    "/puzzles/xsb/Chuchubi02.xsb",
    "/puzzles/xsb/Chuchubi03.xsb",
    "/puzzles/xsb/Chuchubi04.xsb",
    "/puzzles/xsb/Chuchubi05.xsb",
    "/puzzles/xsb/Chuchubi06.xsb",
    "/puzzles/xsb/Chuchubi07.xsb",
    "/puzzles/xsb/Chuchubi08.xsb",
    "/puzzles/xsb/Chuchubi09.xsb",
    "/puzzles/xsb/Chuchubi10.xsb",
    "/puzzles/xsb/Chuchubi11.xsb",
    "/puzzles/xsb/Chuchubi12.xsb",
    "/puzzles/xsb/Chuchubi13.xsb",
    "/puzzles/xsb/Chuchubi14.xsb",
    "/puzzles/xsb/Chuchubi15.xsb",
    "/puzzles/xsb/Classic.xsb",
    "/puzzles/xsb/Cocktail.xsb",
    "/puzzles/xsb/CompactCatalysts.xsb",
    "/puzzles/xsb/CompactCatalysts02.xsb",
    "/puzzles/xsb/ComplexSimplicity.xsb",
    "/puzzles/xsb/Cookie.xsb",
    "/puzzles/xsb/Cosmac.xsb",
    "/puzzles/xsb/Cosmac10.xsb",
    "/puzzles/xsb/Cosmac2.xsb",
    "/puzzles/xsb/Cosmac3.xsb",
    "/puzzles/xsb/Cosmac4.xsb",
    "/puzzles/xsb/Cosmac5.xsb",
    "/puzzles/xsb/Cosmac6.xsb",
    "/puzzles/xsb/Cosmac7.xsb",
    "/puzzles/xsb/Cosmac8.xsb",
    "/puzzles/xsb/Cosmac9.xsb",
    "/puzzles/xsb/Cosmonotes.xsb",
    "/puzzles/xsb/Cosmopoly.xsb",
    "/puzzles/xsb/Cubes&Tubes.xsb",
    "/puzzles/xsb/DD-1.xsb",
    "/puzzles/xsb/DD-2.xsb",
    "/puzzles/xsb/DavidW.SkinnerArranged.xsb",
    "/puzzles/xsb/Demons&Diamonds.xsb",
    "/puzzles/xsb/Dimitri&Yorick.xsb",
    "/puzzles/xsb/Disciple.xsb",
    "/puzzles/xsb/Drina.xsb",
    "/puzzles/xsb/Dunav.xsb",
    "/puzzles/xsb/Dushi01.xsb",
    "/puzzles/xsb/Dushi02.xsb",
    "/puzzles/xsb/Dushi03.xsb",
    "/puzzles/xsb/Dushi04.xsb",
    "/puzzles/xsb/Dushi05.xsb",
    "/puzzles/xsb/Dushi06.xsb",
    "/puzzles/xsb/Dushi07.xsb",
    "/puzzles/xsb/Dushi08.xsb",
    "/puzzles/xsb/Dushi09.xsb",
    "/puzzles/xsb/Dushi10.xsb",
    "/puzzles/xsb/Dushi11.xsb",
    "/puzzles/xsb/Dushi12.xsb",
    "/puzzles/xsb/Dushi13.xsb",
    "/puzzles/xsb/Easy5Boxes.xsb",
    "/puzzles/xsb/EricF.TchongArranged.xsb",
    "/puzzles/xsb/Erika.xsb",
    "/puzzles/xsb/ErimSeverCollection.xsb",
    "/puzzles/xsb/Escapology.xsb",
    "/puzzles/xsb/F.Pokornycollection.xsb",
    "/puzzles/xsb/Fauxpas.xsb",
    "/puzzles/xsb/FibonacciChallenge.xsb",
    "/puzzles/xsb/FieryCatalysts.xsb",
    "/puzzles/xsb/FiveBrothers.xsb",
    "/puzzles/xsb/Flatland.xsb",
    "/puzzles/xsb/Fly.xsb",
    "/puzzles/xsb/Fontana.xsb",
    "/puzzles/xsb/FrantisekPokornycollection.xsb",
    "/puzzles/xsb/FunnyTemplateLevels.xsb",
    "/puzzles/xsb/Gabi&Jenny.xsb",
    "/puzzles/xsb/Galadriel.xsb",
    "/puzzles/xsb/GameofThrones.xsb",
    "/puzzles/xsb/Gate.xsb",
    "/puzzles/xsb/GhislainMartinArranged.xsb",
    "/puzzles/xsb/GreenMachine.xsb", !
    "/puzzles/xsb/GrigChallengeVariation.xsb",
    "/puzzles/xsb/Grigr2001.xsb",
    "/puzzles/xsb/Grigr2002.xsb",
    "/puzzles/xsb/GrigrChallenge.xsb",
    "/puzzles/xsb/GrigrChallengeRemodeled.xsb",
    "/puzzles/xsb/GrigrComet.xsb",
    "/puzzles/xsb/GrigrSpecial.xsb",
    "/puzzles/xsb/GrigrStar.xsb",
    "/puzzles/xsb/GrigrSun.xsb",
    "/puzzles/xsb/Gucevo.xsb",
    "/puzzles/xsb/Guichard.xsb",
    "/puzzles/xsb/GyjgwArranged.xsb",
    "/puzzles/xsb/GyjgwCollection.xsb",
    "/puzzles/xsb/Haikemonocollection.xsb",
    "/puzzles/xsb/Haikemonocollection2.xsb",
    "/puzzles/xsb/Help.xsb",
    "/puzzles/xsb/HomzLevels.xsb",
    "/puzzles/xsb/HomzLevelsPartII.xsb",
    "/puzzles/xsb/HowardLevels1.xsb",
    "/puzzles/xsb/HowardsFourthSetsFourthSet.xsb",
    "/puzzles/xsb/HowardsSecondSetsSecondSet.xsb",
    "/puzzles/xsb/HowardsThirdSetsThirdSet.xsb",
    "/puzzles/xsb/InitialTrouble.xsb",
    "/puzzles/xsb/Initiation.xsb",
    "/puzzles/xsb/IonicCatalysts.xsb",
    "/puzzles/xsb/IonicCatalystsReprisal01.xsb",
    "/puzzles/xsb/IonicCatalystsReprisal02.xsb",
    "/puzzles/xsb/It'sAllGreek.xsb",
    "/puzzles/xsb/JCDlevels.xsb",
    "/puzzles/xsb/Jean-PierreKent.xsb",
    "/puzzles/xsb/Joke.xsb",
    "/puzzles/xsb/KEASCollection.xsb",
    "/puzzles/xsb/Kalle1.xsb",
    "/puzzles/xsb/KenyamSetA.xsb",
    "/puzzles/xsb/Kevin01.xsb",
    "/puzzles/xsb/Kevin02.xsb",
    "/puzzles/xsb/Kevin03.xsb",
    "/puzzles/xsb/Kevin04.xsb",
    "/puzzles/xsb/Kevin05.xsb",
    "/puzzles/xsb/Kevin06.xsb",
    "/puzzles/xsb/Kevin07.xsb",
    "/puzzles/xsb/Kevin08.xsb",
    "/puzzles/xsb/Kevin09.xsb",
    "/puzzles/xsb/Kevin10.xsb",
    "/puzzles/xsb/Kevin11.xsb",
    "/puzzles/xsb/Kevin12.xsb",
    "/puzzles/xsb/Kevin13.xsb",
    "/puzzles/xsb/Kevin14.xsb",
    "/puzzles/xsb/Kevin15.xsb",
    "/puzzles/xsb/Kevin16.xsb",
    "/puzzles/xsb/Kevin17.xsb",
    "/puzzles/xsb/Kevin18.xsb",
    "/puzzles/xsb/Kevin19.xsb",
    "/puzzles/xsb/Kevin20.xsb",
    "/puzzles/xsb/Kevin21.xsb",
    "/puzzles/xsb/KevinB.ReillyArranged.xsb",
    "/puzzles/xsb/Kisser.xsb",
    "/puzzles/xsb/KobusTheroncollection.xsb",
    "/puzzles/xsb/Kokoban.xsb",
    "/puzzles/xsb/Kos.xsb",
    "/puzzles/xsb/KurtNittel1.xsb",
    "/puzzles/xsb/KurtNittel2.xsb",
    "/puzzles/xsb/LaGolondrina01.xsb",
    "/puzzles/xsb/LaizhufuandLZYArranged.xsb",
    "/puzzles/xsb/LearningSokoban.xsb",
    "/puzzles/xsb/LexicalCatalysts.xsb",
    "/puzzles/xsb/LiJinYouCollection.xsb",
    "/puzzles/xsb/Lined.xsb",
    "/puzzles/xsb/Loma.xsb",
    "/puzzles/xsb/Longevity.xsb",
    "/puzzles/xsb/MF8SokobanCompetition.xsb",
    "/puzzles/xsb/MacTommyinventions.xsb",
    "/puzzles/xsb/MagicPearls.xsb",
    "/puzzles/xsb/Mango.xsb",
    "/puzzles/xsb/ManyBoxes.xsb",
    "/puzzles/xsb/MapsAfterAll.xsb",
    "/puzzles/xsb/MarcusPalstra.xsb",
    "/puzzles/xsb/MarioBonenfantcollection.xsb",
    "/puzzles/xsb/Mariposa.xsb",
    "/puzzles/xsb/MarkoDzekic.xsb",
    "/puzzles/xsb/MasSasquatch.xsb",
    "/puzzles/xsb/MassRemodel.xsb",
    "/puzzles/xsb/MasterHead.xsb",
    "/puzzles/xsb/Mastervip.xsb",
    "/puzzles/xsb/Maximum100,000moves.xsb",
    "/puzzles/xsb/MicroCosmos.xsb",
    "/puzzles/xsb/Microban.xsb",
    "/puzzles/xsb/Microban01Arranged.xsb",
    "/puzzles/xsb/Microban02Arranged.xsb",
    "/puzzles/xsb/MicrobanII.xsb",
    "/puzzles/xsb/MicrobanIII.xsb",
    "/puzzles/xsb/MicrobanIV.xsb",
    "/puzzles/xsb/Mill.xsb",
    "/puzzles/xsb/MillRemodel.xsb",
    "/puzzles/xsb/MiniCosmos.xsb",
    "/puzzles/xsb/Mitija.xsb",
    "/puzzles/xsb/Mitija1.xsb",
    "/puzzles/xsb/Mitija2.xsb",
    "/puzzles/xsb/Mitija3.xsb",
    "/puzzles/xsb/Mitija4.xsb",
    "/puzzles/xsb/Monde.xsb",
    "/puzzles/xsb/MonryCollection.xsb",
    "/puzzles/xsb/MonryandPandaArranged.xsb",
    "/puzzles/xsb/MonsterSokoban.xsb",
    "/puzzles/xsb/MoreBugscollections.xsb",
    "/puzzles/xsb/MoreMagicPearls.xsb",
    "/puzzles/xsb/Mulholland2.xsb",
    "/puzzles/xsb/MulhollandD.xsb",
    "/puzzles/xsb/Myriocosmos.xsb",
    "/puzzles/xsb/NaboCosmos.xsb",
    "/puzzles/xsb/Nakamiya.xsb",
    "/puzzles/xsb/NakamiyaJoy.xsb",
    "/puzzles/xsb/NakamiyaLimit.xsb",
    "/puzzles/xsb/NakamiyaPractice.xsb",
    "/puzzles/xsb/Namo.xsb",
    "/puzzles/xsb/NewYear.xsb",
    "/puzzles/xsb/Novoban.xsb",
    "/puzzles/xsb/Numbers.xsb",
    "/puzzles/xsb/NumbersbyDrFogh.xsb",
    "/puzzles/xsb/Original&Extra.xsb",
    "/puzzles/xsb/Original01.xsb",
    "/puzzles/xsb/Original02.xsb",
    "/puzzles/xsb/Original3.xsb",
    "/puzzles/xsb/Original51-90remodeled.xsb",
    "/puzzles/xsb/OriginalExtraSharpen.xsb",
    "/puzzles/xsb/Orimaze-variations.xsb",
    "/puzzles/xsb/Orimaze.xsb",
    "/puzzles/xsb/Orimaze2.xsb",
    "/puzzles/xsb/Pacov.xsb",
    "/puzzles/xsb/Park.xsb",
    "/puzzles/xsb/PassingBy.xsb",
    "/puzzles/xsb/PassionFruit.xsb",
    "/puzzles/xsb/Patera.xsb",
    "/puzzles/xsb/Paulje.xsb",
    "/puzzles/xsb/Payback01.xsb",
    "/puzzles/xsb/Payback02.xsb",
    "/puzzles/xsb/Payback03.xsb",
    "/puzzles/xsb/Payback04.xsb",
    "/puzzles/xsb/Payback05.xsb",
    "/puzzles/xsb/Payback06.xsb",
    "/puzzles/xsb/Payback07.xsb",
    "/puzzles/xsb/Payback08.xsb",
    "/puzzles/xsb/Payback09.xsb",
    "/puzzles/xsb/Payback10.xsb",
    "/puzzles/xsb/Perfect.xsb",
    "/puzzles/xsb/Petitesse.xsb",
    "/puzzles/xsb/PicoCosmos.xsb",
    "/puzzles/xsb/Picolevels.xsb",
    "/puzzles/xsb/Piramida.xsb",
    "/puzzles/xsb/Podrinje.xsb",
    "/puzzles/xsb/Puzzle.xsb",
    "/puzzles/xsb/Quagmire.xsb",
    "/puzzles/xsb/Quagmire2.xsb",
    "/puzzles/xsb/Quagmire3.xsb",
    "/puzzles/xsb/Randoms.xsb",
    "/puzzles/xsb/Rdlom.xsb",
    "/puzzles/xsb/Rebus1.xsb",
    "/puzzles/xsb/Rectangled.xsb",
    "/puzzles/xsb/RedStar.xsb",
    "/puzzles/xsb/RemodelClub.xsb",
    "/puzzles/xsb/Remodeling.xsb",
    "/puzzles/xsb/Revenge.xsb",
    "/puzzles/xsb/Revenge13.xsb",
    "/puzzles/xsb/Revenge14.xsb",
    "/puzzles/xsb/Revenge15.xsb",
    "/puzzles/xsb/Revenge16.xsb",
    "/puzzles/xsb/Revenge17.xsb",
    "/puzzles/xsb/Revenge18.xsb",
    "/puzzles/xsb/Revenge19.xsb",
    "/puzzles/xsb/Revenge20.xsb",
    "/puzzles/xsb/Revenge21.xsb",
    "/puzzles/xsb/Revenge22.xsb",
    "/puzzles/xsb/Revenge23.xsb",
    "/puzzles/xsb/Revenge24.xsb",
    "/puzzles/xsb/Revenge25.xsb",
    "/puzzles/xsb/Revenge26.xsb",
    "/puzzles/xsb/Revenge27.xsb",
    "/puzzles/xsb/Revenge28.xsb",
    "/puzzles/xsb/Revenge29.xsb",
    "/puzzles/xsb/Revenge30.xsb",
    "/puzzles/xsb/Revenge31.xsb",
    "/puzzles/xsb/Revenge32.xsb",
    "/puzzles/xsb/Revenge33.xsb",
    "/puzzles/xsb/Revenge34.xsb",
    "/puzzles/xsb/Revenge35.xsb",
    "/puzzles/xsb/Revenge36.xsb",
    "/puzzles/xsb/Revenge37.xsb",
    "/puzzles/xsb/Revenge38.xsb",
    "/puzzles/xsb/Revenge39.xsb",
    "/puzzles/xsb/RevengeCollection01.xsb",
    "/puzzles/xsb/RevengeCollection02.xsb",
    "/puzzles/xsb/RevengeCollection03.xsb",
    "/puzzles/xsb/RevengeCollection04.xsb",
    "/puzzles/xsb/RevengeCollection05.xsb",
    "/puzzles/xsb/RevengeCollection06.xsb",
    "/puzzles/xsb/RevengeCollection07.xsb",
    "/puzzles/xsb/RevengeCollection08.xsb",
    "/puzzles/xsb/RevengeCollection09.xsb",
    "/puzzles/xsb/RevengeCollection10.xsb",
    "/puzzles/xsb/RevengeCollection11.xsb",
    "/puzzles/xsb/RevengeCollection12.xsb",
    "/puzzles/xsb/RichardWestonCollection.xsb",
    "/puzzles/xsb/Rikyman.xsb",
    "/puzzles/xsb/RogerDelaporte.xsb",
    "/puzzles/xsb/SBMendonca(Livres).xsb",
    "/puzzles/xsb/SBMendonca(Modifications).xsb",
    "/puzzles/xsb/SBMendonca(Remodeled).xsb",
    "/puzzles/xsb/SBMendonca01.xsb",
    "/puzzles/xsb/SBMendonca02.xsb",
    "/puzzles/xsb/SBMendonca03.xsb",
    "/puzzles/xsb/SBMendonca04.xsb",
    "/puzzles/xsb/SBMendonca05.xsb",
    "/puzzles/xsb/SBMendonca06.xsb",
    "/puzzles/xsb/SOKO-BONUS.xsb",
    "/puzzles/xsb/Saquarema.xsb",
    "/puzzles/xsb/Sasquatch.xsb",
    "/puzzles/xsb/Sasquatch01Arranged.xsb",
    "/puzzles/xsb/Sasquatch02Arranged.xsb",
    "/puzzles/xsb/Sasquatch03Arranged.xsb",
    "/puzzles/xsb/Sasquatch04Arranged.xsb",
    "/puzzles/xsb/Sasquatch05Arranged.xsb",
    "/puzzles/xsb/Sasquatch06Arranged.xsb",
    "/puzzles/xsb/Sasquatch07Arranged.xsb",
    "/puzzles/xsb/SasquatchIII.xsb",
    "/puzzles/xsb/SasquatchIV.xsb",
    "/puzzles/xsb/SasquatchIX.xsb",
    "/puzzles/xsb/SasquatchV.xsb",
    "/puzzles/xsb/SasquatchVI.xsb",
    "/puzzles/xsb/SasquatchVII.xsb",
    "/puzzles/xsb/SasquatchVIII.xsb",
    "/puzzles/xsb/SasquatchX.xsb",
    "/puzzles/xsb/SasquatchXI.xsb",
    "/puzzles/xsb/SasquatchXII.xsb",
    "/puzzles/xsb/Scoria.xsb",
    "/puzzles/xsb/Scoria2.xsb",
    "/puzzles/xsb/Scoria3.xsb",
    "/puzzles/xsb/SecundusgradusadOlympo.xsb",
    "/puzzles/xsb/Serena1.xsb",
    "/puzzles/xsb/Serena2.xsb",
    "/puzzles/xsb/Serena3.xsb",
    "/puzzles/xsb/Serena4.xsb",
    "/puzzles/xsb/Serena5.xsb",
    "/puzzles/xsb/Serena6.xsb",
    "/puzzles/xsb/Serena7.xsb",
    "/puzzles/xsb/Serena8.xsb",
    "/puzzles/xsb/Serena9.xsb",
    "/puzzles/xsb/SergBelyaev1.xsb",
    "/puzzles/xsb/SergBelyaev2.xsb",
    "/puzzles/xsb/SergBelyaev3.xsb",
    "/puzzles/xsb/SergBelyaev4.xsb",
    "/puzzles/xsb/SergBelyaev5.xsb",
    "/puzzles/xsb/SergBelyaev6.xsb",
    "/puzzles/xsb/SharpenCollection.xsb",
    "/puzzles/xsb/Simplecollection.xsb",
    "/puzzles/xsb/Simplistic.xsb",
    "/puzzles/xsb/Simply.xsb",
    "/puzzles/xsb/Smaller,thinner,easier,better.xsb",
    "/puzzles/xsb/SokoChallenge.xsb",
    "/puzzles/xsb/SokoCreation.xsb",
    "/puzzles/xsb/SokoLasse.xsb",
    "/puzzles/xsb/SokoMind.xsb",
    "/puzzles/xsb/SokoSpace.xsb",
    "/puzzles/xsb/SokoStation.xsb",
    "/puzzles/xsb/SokobanExtreme.xsb",
    "/puzzles/xsb/SokobanJunior1.xsb",
    "/puzzles/xsb/SokobanJunior2.xsb",
    "/puzzles/xsb/SokobanOnline.xsb",
    "/puzzles/xsb/SokobanOriginalPuzzlesTributeL.xsb",
    "/puzzles/xsb/Sokobet.xsb",
    "/puzzles/xsb/Sokobig70.xsb",
    "/puzzles/xsb/Sokobig80.xsb",
    "/puzzles/xsb/SokobigRemodels.xsb",
    "/puzzles/xsb/Sokocrisis.xsb",
    "/puzzles/xsb/Sokodeal.xsb",
    "/puzzles/xsb/Sokogen-990602Levels.xsb",
    "/puzzles/xsb/Sokoking01.xsb",
    "/puzzles/xsb/Sokolasse2.xsb",
    "/puzzles/xsb/Sokolate.xsb",
    "/puzzles/xsb/Sokomania.xsb",
    "/puzzles/xsb/Sokompact.xsb",
    "/puzzles/xsb/Sokophobia.xsb",
    "/puzzles/xsb/Soloban.xsb",
    "/puzzles/xsb/Sonic.xsb",
    "/puzzles/xsb/Sonic2.xsb",
    "/puzzles/xsb/Sonic3.xsb",
    "/puzzles/xsb/SoundextensionsandCircles.xsb",
    "/puzzles/xsb/Spirals.xsb",
    "/puzzles/xsb/Spiros01.xsb",
    "/puzzles/xsb/Spiros02.xsb",
    "/puzzles/xsb/Spiros03.xsb",
    "/puzzles/xsb/Spiros04.xsb",
    "/puzzles/xsb/Spiros05.xsb",
    "/puzzles/xsb/Spiros06.xsb",
    "/puzzles/xsb/Spiros07.xsb",
    "/puzzles/xsb/Spiros8.xsb",
    "/puzzles/xsb/SquareDance.xsb",
    "/puzzles/xsb/Squared.xsb",
    "/puzzles/xsb/StariFijaker.xsb",
    "/puzzles/xsb/StillMorecollection.xsb",
    "/puzzles/xsb/Strategy.xsb",
    "/puzzles/xsb/SundayWarmup.xsb",
    "/puzzles/xsb/SvensCollection.xsb",
    "/puzzles/xsb/SylvainGravejat.xsb",
    "/puzzles/xsb/Sylvie.xsb",
    "/puzzles/xsb/Symmetrixx.xsb",
    "/puzzles/xsb/TBox.xsb",
    "/puzzles/xsb/TBox2.xsb",
    "/puzzles/xsb/TBox3.xsb",
    "/puzzles/xsb/TBox4.xsb",
    "/puzzles/xsb/TBox5.xsb",
    "/puzzles/xsb/Takakencollection.xsb",
    "/puzzles/xsb/TammyRock.xsb",
    "/puzzles/xsb/TertiusgradusadOlympo1.xsb",
    "/puzzles/xsb/TheAdventurer.xsb",
    "/puzzles/xsb/TheBagatelle2collection.xsb",
    "/puzzles/xsb/TheBagatellecollection.xsb",
    "/puzzles/xsb/TheCantrip2collection.xsb",
    "/puzzles/xsb/TheCantripcollection.xsb",
    "/puzzles/xsb/TheDH1collection.xsb",
    "/puzzles/xsb/TheDH2collection.xsb",
    "/puzzles/xsb/TheFirstOne.xsb",
    "/puzzles/xsb/TheHouse.xsb",
    "/puzzles/xsb/TheMaelstromcollection.xsb",
    "/puzzles/xsb/TheSokEvocollection.xsb",
    "/puzzles/xsb/TheSokHardcollection.xsb",
    "/puzzles/xsb/TheSolver'sunsolvable.xsb",
    "/puzzles/xsb/TheWarehouseI-VerticalMobility.xsb",
    "/puzzles/xsb/ThinkingRabbitArranged.xsb",
    "/puzzles/xsb/TianLang.xsb",
    "/puzzles/xsb/TitleScreens.xsb",
    "/puzzles/xsb/Trapdooooooooors.xsb",
    "/puzzles/xsb/Twisty.xsb",
    "/puzzles/xsb/Unico.xsb",
    "/puzzles/xsb/V2009.xsb",
    "/puzzles/xsb/V2010.xsb",
    "/puzzles/xsb/V2014.xsb",
    "/puzzles/xsb/Various.xsb",
    "/puzzles/xsb/VladimirTockicCollection2Demo.xsb",
    "/puzzles/xsb/VladimirTockiccollection.xsb",
    "/puzzles/xsb/VolatileCatalysts.xsb",
    "/puzzles/xsb/Warehouse.xsb",
    "/puzzles/xsb/YASGen.xsb",
    "/puzzles/xsb/YASGood.xsb",
    "/puzzles/xsb/Yasgood2.xsb",
    "/puzzles/xsb/YorkShenCollection.xsb",
    "/puzzles/xsb/YoshioMurasesAutosAuto.xsb",
    "/puzzles/xsb/YoshioMurasesHand-MadesHand-Made.xsb",
    "/puzzles/xsb/Yut.xsb",
    "/puzzles/xsb/ZbigniewKornas.xsb",
    "/puzzles/xsb/Zelja.xsb",
    "/puzzles/xsb/Zelja1.xsb",
    "/puzzles/xsb/ZigZagPlus.xsb",
    "/puzzles/xsb/Zika.xsb",
    "/puzzles/xsb/Zika1.xsb",
    "/puzzles/xsb/Zone26.xsb",
    "/puzzles/xsb/dh5.xsb",
    "/puzzles/xsb/funlevels.xsb",
    "/puzzles/xsb/jw2005.xsb",
    "/puzzles/xsb/ooxian.xsb",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
            .catch(e => console.error(e)) 
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request) // Try to find the resource in the cache
            .then((response) => {
                return response || fetch(event.request); // If not found, fetch from the network
            })
    );
});