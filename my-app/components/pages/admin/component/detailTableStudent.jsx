import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal"; // Import react-native-modal

export default function DetailTableStudent({ visible, onClose, item }) {
  const {
    profile_image = "https://via.placeholder.com/150", // Fallback image
    full_name = "-",
    birth_date = "-",
    age = "-",
    gender = "-",
    class: userClass = "-",
    achievement = "-",
  } = item || {};

  const formatDate = (date) => {
    if (!date || isNaN(Date.parse(date))) return "-";
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Intl.DateTimeFormat("id-ID", options).format(new Date(date));
  };

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <View className="bg-white p-5 rounded-lg w-full">
        {/* Gambar Profil */}
        <View className="items-center mb-4">
          <Image
            source={{ uri: profile_image }}
            className="w-24 h-24 rounded-full"
            resizeMode="cover"
          />
        </View>

        {/* Informasi Detail */}
        <Text className="text-lg font-bold mb-2 text-center">{full_name}</Text>
        <View className="space-y-2">
          <Text className="text-sm">
            Tanggal Lahir: {formatDate(birth_date)}
          </Text>
          <Text className="text-sm">Umur: {age}</Text>
          <Text className="text-sm">jenis kelamin: {gender}</Text>
          <Text className="text-sm">Kelas: {userClass}</Text>
          <Text className="text-sm">Achievement: {achievement}</Text>
        </View>

        {/* Tombol Tutup */}
        <TouchableOpacity
          onPress={onClose}
          className="mt-6 bg-blue-500 p-3 rounded-lg"
        >
          <Text className="text-white text-center font-semibold">Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
